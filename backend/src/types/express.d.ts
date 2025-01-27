// types/express.d.ts
import { Request } from "express";
import { Admin, Doctor, User } from "./types";

declare module "express" {
  export interface Request {
    user?: any,
    doctor? : any,
    admin? : any
  }
}
