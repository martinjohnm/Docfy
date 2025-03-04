import { Router } from "express";
import { doctorMiddleWare } from "../../middlewares/doctorMiddleWare";
import { getHospitals, getSingleHospital } from "../../controllers/doctor/hospitals.doctor";
import { updateDoctor } from "../../controllers/doctor/edit.doctor";
import { getAllPatients, getPatientsCompleted, getUpcomingPatients } from "../../controllers/doctor/patient.doctor";


const router = Router()


router.get("/get-all-bookings",doctorMiddleWare,getAllPatients)
router.get("/get-upcoming-bookings",doctorMiddleWare,getUpcomingPatients)
router.get("/get-completed-bookings",doctorMiddleWare,getPatientsCompleted)


export default router