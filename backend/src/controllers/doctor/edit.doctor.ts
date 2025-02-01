
import { Request, Response } from "express";
import db from "../../db"
import { comparePassword, generatToken, getUserFromToken, hashPassword } from "../../utils";
import { doctorUpdateInput } from "../../types/zod.types";


export const updateDoctor = async (req : Request, res : Response) => {
    try {
        
        
        const parsedDoctorUpdate = doctorUpdateInput.safeParse(req.body);

        if (!parsedDoctorUpdate.success) {
            res.status(400).json({
                message : "Input error",
                success : false
            })
            return
        }

        if (parsedDoctorUpdate.data?.oldPassword) {
            const doctorr = await db.doctor.findFirst({
                where : {
                    id : req.doctor.id
                }
            })

        
            if (doctorr?.password) {
                
                if (!await comparePassword(parsedDoctorUpdate.data.oldPassword, doctorr.password)) {
                    res.status(400).json({
                        message : "Incorrect password",
                        success : false
                    })
                    return
                }
            }
        }

        

        if (parsedDoctorUpdate.data?.confirmPassword ) {

          
            if (parsedDoctorUpdate.data.confirmPassword !== parsedDoctorUpdate.data.password) {
                res.status(400).json({
                    message : "Password not match",
                    success : false
                })
                return
            }
        }
        delete parsedDoctorUpdate.data?.confirmPassword
        delete parsedDoctorUpdate.data?.oldPassword
        


        const doctor = async function createDoctor() {
            if (parsedDoctorUpdate.data.password) {
                const doctor = await db.doctor.update({
                    where : {
                        id : req.doctor.id
                    },
                    data : {
                        ...parsedDoctorUpdate.data,
                        password : await hashPassword(parsedDoctorUpdate.data.password)
                    },
                    include : {
                        specialization : true,
                        hospital : true,
                        bookings : true
                    }
                })
                return doctor
            } else {
                const doctor = await db.doctor.update({
                    where : {
                        id : req.doctor.id
                    },
                    data : parsedDoctorUpdate.data, 
                    include : {
                        specialization : true,
                        hospital : true
                    }
                })

                return doctor
            }
        }
        
        
        res.status(200).json({
            message : "Doctor Updated successfully",
            data : {
                doctor : await doctor()
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
