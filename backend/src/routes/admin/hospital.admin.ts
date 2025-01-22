import { Router } from "express";
import { createHospitalAdmin, getAllHospitalsAdmin, getHospitalAdmin, updateHospitalCategoryAdmin } from "../../controllers/admin/hospital.admin";

const router = Router()


router.post("/create", createHospitalAdmin)
router.get("/get-all", getAllHospitalsAdmin)
router.put("/update-category/:id", updateHospitalCategoryAdmin)
router.get("/get/:id", getHospitalAdmin)


export default router