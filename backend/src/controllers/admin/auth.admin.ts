import { Request, Response } from "express";
import db from "../../db"
import { comparePassword, generatToken, hashPassword } from "../../utils";




export const adminLogin = async (req : Request, res : Response) => {

    const { email, password} = req.body;

    const admin = await db.admin.findUnique({
        where : {
            email
        }
    })

    if (!admin) { 
        res.status(404).json({
            message : "admin not found",
            success : false
        });
        return
    }

    const isValid = await comparePassword(password, String(admin.password));

    if (!isValid) {
        res.status(401).json({
            message : "Password not matching",
            success : false
        });
        return
    }

    const token = generatToken({ id: admin.id, email  :admin.email});
    res.json({
        message : "Login successfull",
        data : {
            admin, 
            isAdminAuthenticated : true, 
            adminToken : token
        },
        success : true
    });

}

export const adminSignup = async (req : Request, res : Response) => {

    const { email, password} = req.body;

    const admin = await db.admin.findFirst({
        where : {
            email
        }
    })

    if (admin) { 
        res.status(400).json({
            message : "admin already registered",
            success : false
        });
        return
    }

    const hashedPassword = await hashPassword(password)

    const newadmin = await db.admin.create({
        data : {
            email,
            password : hashedPassword
        }
    })

    const token = generatToken({id : newadmin.id, email : newadmin.email})

    res.status(201).json({
        message : "admin created successfully",
        data : {
            token
        },
        success : true
    })
    
}

export const getadmin = async (req : Request, res : Response) => {

    try {
        

        const admin = await db.admin.findFirst({
            where : {
                id : req.admin.id
            }
        })


        const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header
        
        res.status(200).json({
            message : "admin fetched successfully",
            data : {
                admin,
                isAdminAuthenticated : true, 
                adminToken : token
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
}

export const adminLogout = async (req : Request, res : Response) => {
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



