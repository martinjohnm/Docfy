import { Router } from "express";
import { userMiddleWare } from "../../middlewares/userMiddleWare";
import {  } from "../../controllers/user/auth.user";
import { getDoctor, getDoctorByFilters, getDoctors } from "../../controllers/user/doctor.user";


const router = Router()

router.get("/get-all", getDoctors)
router.get("/get/:id", getDoctor)
router.get("/get-doctors-by-filter", getDoctorByFilters)

export default router
