

import { configDotenv } from "dotenv";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { User } from "./types";

interface TokeInputType {
    id : number,
    email : string
}
configDotenv()
const secret = process.env.JWT_SECRET as string;
const jwt_expiry = process.env.JWT_EXPIRY || "1h"

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
  };
  
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
};

export const generatToken = (payload  :TokeInputType) => {
    return jwt.sign(payload, secret, { expiresIn: jwt_expiry });

  };

export const verifyToken = (token: string): any => {
    return jwt.verify(token, secret);
};


export const getUserFromToken  = (token : string) : User | null => {

  try {
    // Verify the token
    const decoded = verifyToken(token) as User

    return decoded
  } catch (err) {
    
    return null
  }

}