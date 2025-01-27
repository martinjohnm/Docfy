
import { Request, Response, NextFunction } from "express"
import { getUserFromToken, verifyToken } from "../utils";


export const doctorMiddleWare = (req : Request, res : Response, next : NextFunction) => {
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

        req.doctor = userFromTokne
        
        next()
        } catch(e) {

        }


}