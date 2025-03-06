import { Router } from "express";
import { getUsersAdmin } from "../../controllers/admin/user.admin";

const router = Router()


router.get("/get-all", getUsersAdmin)

export default router