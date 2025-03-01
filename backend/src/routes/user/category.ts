import { Router } from "express";
import { getAllCategories, getAllCategoriesByHospital } from "../../controllers/user/category";

const router = Router()


router.get("/get-categories", getAllCategories)
router.get("/get-by-hospitalId/:id", getAllCategoriesByHospital)

export default router
