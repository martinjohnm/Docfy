




import { Router } from "express";
import { createSlot, getSlotsByDoctor } from "../../controllers/doctor/slot.doctor";
import { doctorMiddleWare } from "../../middlewares/doctorMiddleWare";


const router = Router()


router.post("/create",doctorMiddleWare,createSlot)
router.get("/get-slots-doctor",doctorMiddleWare,getSlotsByDoctor)

export default router