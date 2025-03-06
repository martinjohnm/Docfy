import { Router } from "express";
import { getDoctorsAdmin } from "../../controllers/admin/doctor.admin";

const router = Router()


router.get("/get-all", getDoctorsAdmin)

export default router