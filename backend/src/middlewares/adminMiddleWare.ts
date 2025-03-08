
import { Request, Response, NextFunction } from "express"
import { getAdminFromToken, getUserFromToken, verifyToken } from "../utils";


export const adminMiddleWare = (req : Request, res : Response, next : NextFunction) => {
    try {
        
        const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header

 
   
        if (!token) {
        
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return
        }

        const adminFromToken = getAdminFromToken(token)
   
        if (!adminFromToken) {
            res.status(401).json({ success: false, message: 'Token expired Login again' });
              return
        }

        req.admin = adminFromToken
        
        
        next()
        } catch(e) {

        }


}