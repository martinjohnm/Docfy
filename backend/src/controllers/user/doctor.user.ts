import { Request, Response } from "express";
import db from "../../db"
import { Prisma } from "@prisma/client";
import { queryDoctorSchema } from "../../types/zod.types";


export const getDoctors = async (req : Request, res : Response) => {

    try {
        
        const doctors = await db.doctor.findMany({
            include : {
                specialization : true,
                hospital : {
                    include : {
                        location : true
                    }
                },

            }
        })

        res.status(200).json({
            message : "Doctors fetched successfully",
            data : {
                doctors
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


export const getDoctor = async (req : Request, res : Response) => {

    try {
        const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header
        
        if (!token) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return
        }


        res.status(200).json({
            message : "User fetched successfully",
            data : {
                user : ""
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

export const getDoctorByFilters = async (req : Request, res : Response) => {

    try {


        const validatedQuery = queryDoctorSchema.parse(req.query);
        const {hospitalId,specializationId, searchTerm} = validatedQuery

        const where : Prisma.DoctorWhereInput = {}

        if (hospitalId) where.hospitalId = {contains : hospitalId, mode : "insensitive"}
        if (specializationId) where.specializationId = {contains : specializationId, mode : "insensitive"}
        if (searchTerm) {
            where.OR = [
                { name : {contains : searchTerm, mode : "insensitive"} }
            ]
        }


        const doctors = await db.doctor.findMany({
            where ,
            include : {
                specialization : true,
                hospital : {
                    include : {
                        location : true
                    }
                },
            },
            orderBy : {
                name : "asc"
            },
        })


        res.status(200).json({
            message : "User fetched successfully",
            data : {
                doctors
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
