import { Router, Request, Response, NextFunction } from "express";
import passport from "passport"
import express from 'express';
import db from "../db"
import { comparePassword, generatToken, getUserFromToken, hashPassword } from "../utils";
import { empty } from "@prisma/client/runtime/library";
import { userMiddleWare } from "../middlewares/userMiddleWare";
import { User } from "../types";


const router = Router()
const CLIENT_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';


router.post("/login", async (req : Request, res : Response) => {

    const { email, password} = req.body;

    const user = await db.user.findFirst({
        where : {
            email
        }
    })

    if (!user) { 
        res.status(404).json({
            message : "User not found",
            success : false
        });
        return
    }

    const isValid = await comparePassword(password, String(user.password));

    if (!isValid) {
        res.status(401).json({
            message : "Password not matching",
            success : false
        });
        return
    }

    const token = generatToken({ id: user.id, email  :user.email});
    res.json({
        message : "Login successfull",
        data : {
            token
        },
        success : true
    });

})



router.post("/signup", async (req : Request, res : Response) => {

    const { email, password, name} = req.body;

    const user = await db.user.findFirst({
        where : {
            email
        }
    })

    if (user) { 
        res.status(400).json({
            message : "User already registered",
            success : false
        });
        return
    }

    const hashedPassword = await hashPassword(password)

    const newUser = await db.user.create({
        data : {
            email,
            password : hashedPassword,
            name,
            provider : "EMAIL"
        }
    })

    const token = generatToken({id : newUser.id, email : newUser.email})

    res.status(201).json({
        message : "User created successfully",
        data : {
            token
        },
        success : true
    })
    

})



router.get(
    '/google',
    passport.authenticate('google', {
         scope: ['profile', 'email'] 
}),
);

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: `${CLIENT_URL}/login/failed`,
        session : false
    }),
    (req, res) => {

        const user = req.user as any;
        const token = generatToken({id : user.id, email : user.email})
  
        
        res.redirect(`${CLIENT_URL}/google-callback/?token=${token}&email=${user.email}`); // Redirect to frontend
      }
);


router.get("/user",userMiddleWare, async (req : Request, res : Response) => {

     
    try {
        const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header
        
        if (!token) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return
        }

        const userFromTokne = getUserFromToken(token)

        if (!userFromTokne) {
            res.status(401).json({ success: false, message: 'Token expired Login again' });
                return
        }

        const user = await db.user.findFirst({
            where : {
                id : userFromTokne.id
            }
        })

    
        
        res.status(200).json({
            message : "User fetched successfully",
            data : {
                user
            },
            success : true
        })
        
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during Logout",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
   

})

router.post("/logout",userMiddleWare, async (req : Request, res : Response) => {
    try {

        res.status(200).json({
            message : "Logged out successfully",
            success : true
          })
          return
  
        
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during Logout",  message); 
        res.status(500).json(
            {
                success : false,
                error : "Internal server error"
            })
  }
   

})

export default router
