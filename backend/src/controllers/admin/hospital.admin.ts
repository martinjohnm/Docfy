import { Request, Response } from "express";
import db from "../../db"
import { hospitalAddInput } from "../../types/zod.types";



export const createHospitalAdmin = async (req : Request, res : Response) => {

    try {
        

        const hospitalData = hospitalAddInput.safeParse(req.body);
        console.log(hospitalData);
        
        if (!hospitalData.success) {
            res.status(400).json({
                message : "hospital already added",
                success : false
            })
            return
        }

        const hospital = await db.hospital.findFirst({
            where :{
                name : hospitalData.data.name
            }
        })

        if (hospital) {
            res.status(409).json({
                message : "hospital already added",
                success : false
            })
            return
        }

        const location = await db.location.findFirst({
            where : {
                id : hospitalData.data.locationId
            }
        })

        if (!location) {
            res.status(400).json({
                message : "No such location",
                success : false
            })
            return
        }


        const newHospital = await db.hospital.create({
            data : hospitalData.data
        })

        res.status(200).json({
            message : "Hospital created successfully",
            data : {
                hospital : newHospital
            },
            success : true
        })
        
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during hospital creation",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}



export const getHospitalsAdmin = async (req : Request, res : Response) => {

    try {
        

        const hospitals = await db.hospital.findMany()

        res.status(200).json({
            message : "Category created successfully",
            data : {
                hospitals
            },
            success : true
        })
        
    
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log("Error during Getting Hospitals",  message); 
        res.status(500).json(
            {
                success : false,
                message : "Internal server error"
            })
    }
}