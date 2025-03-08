import { hashPassword } from "../utils";
import db from "../db"


export async function adminCreationScript() {
    const hashedPassword = await hashPassword("password")
    await db.admin.upsert({
        create : {
            email : "admin@dofdy.com",
            password : hashedPassword
        }, 
        update : {
            email : "admin@dofdy.com",
        },
        where : {
            email : "admin@dofdy.com"
        }

    });
}