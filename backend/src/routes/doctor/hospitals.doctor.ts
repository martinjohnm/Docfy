import { Router } from "express";
import { doctorMiddleWare } from "../../middlewares/doctorMiddleWare";
import { getHospitals, getSingleHospital } from "../../controllers/doctor/hospitals.doctor";


const router = Router()


router.get("/get-all",getHospitals)
router.get("/get/:id",getSingleHospital)

export default router