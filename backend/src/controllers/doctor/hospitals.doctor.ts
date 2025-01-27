
import { Request, Response } from "express";
import db from "../../db"
import { comparePassword, generatToken, getUserFromToken, hashPassword } from "../../utils";



export const getDoctor = async (req : Request, res : Response) => {

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

        const user = await db.doctor.findFirst({
            where : {
                id : userFromTokne.id
            }
        })

    
        
        res.status(200).json({
            message : "User fetched successfully",
            data : {
                user
            },
            success : true,
            token
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
export const getHospitals = async (req : Request, res : Response) => {
    try {
        

        const hospitals = await db.hospital.findMany()
        res.status(200).json({
            message : "User fetched successfully",
            data : {
                hospitals
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

export const getSingleHospital = async (req : Request, res : Response) => {
    try {
        const id = String(req.params.id);
        const hospital = await db.hospital.findUnique({
            where : {
                id
            },
            include : {
                location  :true,
                doctors  :true,
                categories  : true
            }
        })

        if (!hospital) {
            res.status(400).json({
                message : "No such hospital",
                success : false
            })
            return
        }

        res.status(200).json({
            message : "Hospital fetched successfully",
            data : {
                hospital
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

