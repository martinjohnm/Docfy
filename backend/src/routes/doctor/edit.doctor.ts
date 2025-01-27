import { Router } from "express";
import { doctorMiddleWare } from "../../middlewares/doctorMiddleWare";
import { getHospitals, getSingleHospital } from "../../controllers/doctor/hospitals.doctor";
import { updateDoctor } from "../../controllers/doctor/edit.doctor";


const router = Router()


router.put("/update",doctorMiddleWare,updateDoctor)


export default router