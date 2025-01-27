
import { Request, Response } from "express";
import db from "../../db"
import { comparePassword, generatToken, getUserFromToken, hashPassword } from "../../utils";



export const getHospitalCategories = async (req : Request, res : Response) => {
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

