




import { Router } from "express";
import { createSlot, deleteSlotById, getSlotsByDoctor, getSlotsByDoctorFoaDay } from "../../controllers/doctor/slot.doctor";
import { doctorMiddleWare } from "../../middlewares/doctorMiddleWare";


const router = Router()


router.post("/create",doctorMiddleWare,createSlot)
router.delete("/delete-slot-by-id/:id", doctorMiddleWare, deleteSlotById)
router.get("/get-slots-doctor",doctorMiddleWare,getSlotsByDoctor)
router.get("/get-slots-doctor-for-day",doctorMiddleWare,getSlotsByDoctorFoaDay)

export default router