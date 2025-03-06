import { Request, Response } from "express";
import db from "../../db"
import { categoryAddInput } from "../../types/zod.types";




export const getUsersAdmin = async (req : Request, res : Response) => {

    try {
         
        const skip = Number(req.query.skip) || 0
        const take = Number(req.query.take) || 10

        console.log(skip, take);
        

        const users = await db.user.findMany({
            skip : skip * take,
            take,
            orderBy : {
                createdAt : "asc"
            },
            include : {
                
            },
        })


        const totalNoOfUsers = await db.user.count({
            
        })
        
   
        res.status(200).json({
            message : "Doctors fetched successfully",
            data : {
                users,
                totalNoOfUsers
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