import { Router } from "express";
import { getAllHospitalsByCategoryId, getAllHospitalsUser } from "../../controllers/user/hospital.user";

const router = Router()


router.get("/get-all", getAllHospitalsUser)
router.get("/get-by-categoryId", getAllHospitalsByCategoryId)

export default router
