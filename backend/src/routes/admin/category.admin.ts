import { Router } from "express";
import { createCategoryAdmin, getCategoriesAdmin } from "../../controllers/admin/category.admin";

const router = Router()


router.post("/create", createCategoryAdmin)
router.get("/get-all", getCategoriesAdmin)
export default router