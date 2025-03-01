import { Router } from "express";
import { getAllHospitalsUser } from "../../controllers/user/hospital.user";

const router = Router()


router.get("/get-all", getAllHospitalsUser)

export default router
