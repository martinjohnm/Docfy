import { Router } from "express";
import { getAllCategories, getAllCategoriesByHospital } from "../../controllers/user/category";

const router = Router()


router.get("/get-categories", getAllCategories)
router.get("/get-by-hospitalId", getAllCategoriesByHospital)

export default router
