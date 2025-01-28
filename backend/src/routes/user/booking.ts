import { Router } from "express";
import { userMiddleWare } from "../../middlewares/userMiddleWare";
import {  } from "../../controllers/user/auth.user";


const router = Router()


router.get("/get-all",userMiddleWare)

export default router
