import { Request, Response } from "express";
import db from "../../db"
import { comparePassword, generatToken, hashPassword } from "../../utils";
import { doctorLoginInput, doctorSignUpInput } from "../../types/zod.types";




export const doctorLogin = async (req : Request, res : Response) => {

    try {
            
        const parsedDoctorLogin = doctorLoginInput.safeParse(req.body);
        console.log(parsedDoctorLogin);
        
        if (!parsedDoctorLogin.success) {
            res.status(400).json({
                message : "Input error",
                success : false
            })
            return
        }
        const doctor = await db.doctor.findFirst({
            where : {
                email : parsedDoctorLogin.data?.email
            }
        })


        if (!doctor) { 
            res.status(404).json({
                message : "doctor not found",
                success : false
            });
            return
        }

        const isValid = await comparePassword(parsedDoctorLogin.data?.password ?? "", String(doctor.password));


        if (!isValid) {
            res.status(401).json({
                message : "Password not matching",
                success : false
            });
            return
        }

        const token = generatToken({ id: doctor.id, email  :doctor.email});
        res.status(200).json({
            message : "Login successfull",
            data : {
                doctor
            },
            success : true,
            token 
        });
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

export const DoctorSignup = async (req : Request, res : Response) => {

    try {
        
        const parsedDoctorSignUp = doctorSignUpInput.safeParse(req.body);

        if (!parsedDoctorSignUp.success) {
            res.status(400).json({
                message : "Input error",
                success : false
            })
            return
        }

        const doctor = await db.doctor.findFirst({
            where : {
                email : parsedDoctorSignUp.data.email
            }
        })

        if (doctor) { 
            res.status(400).json({
                message : "Doctor already registered",
                success : false
            });
            return
        }

        if (parsedDoctorSignUp.data.password !== parsedDoctorSignUp.data.confirmPassword) {
            res.status(400).json({
                message : "Password dont match",
                success : false
            });
            return
        }

        const hashedPassword = await hashPassword(parsedDoctorSignUp.data.password)

    
        const newdoctor = await db.doctor.create({
            data : {
                name : parsedDoctorSignUp.data.name,
                email : parsedDoctorSignUp.data.email,
                provider : "EMAIL",
                password : hashedPassword,
            }
        })

        const token = generatToken({id : newdoctor.id, email : newdoctor.email})

        res.status(201).json({
            message : "Doctor created successfully",
            data : {
                doctor : newdoctor
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

export const getDoctor = async (req : Request, res : Response) => {

    try {
        
      

        const doctor = await db.doctor.findFirst({
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
                doctor
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