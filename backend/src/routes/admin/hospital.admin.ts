import { Router } from "express";
import { createHospitalAdmin, getHospitalsAdmin } from "../../controllers/admin/hospital.admin";

const router = Router()


router.post("/create", createHospitalAdmin)
router.get("/get-all", getHospitalsAdmin)

export default router