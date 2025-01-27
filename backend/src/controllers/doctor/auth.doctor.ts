import { Request, Response } from "express";
import db from "../../db"
import { comparePassword, generatToken, getUserFromToken, hashPassword } from "../../utils";




export const doctorLogin = async (req : Request, res : Response) => {

    const { email, password} = req.body;

    const user = await db.doctor.findFirst({
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

}

export const DoctorSignup = async (req : Request, res : Response) => {

    const { email, password, name} = req.body;

    const user = await db.doctor.findFirst({
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
        message : "Doctor created successfully",
        data : {
            token
        },
        success : true
    })
    
}

export const getDoctor = async (req : Request, res : Response) => {

    try {
        


        const user = await db.doctor.findFirst({
            where : {
                id : req.doctor.id
            },
            include : {
                hospital : true,
                specialization : true,
                bookings : true
            }
        })

    
        
        res.status(200).json({
            message : "Doctor fetched successfully",
            data : {
                user
            },
            success : true,
            token : ""
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
}

export const doctorLogout = async (req : Request, res : Response) => {
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
   

}