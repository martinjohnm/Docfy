import { Router } from "express";
import { getUsersAdmin } from "../../controllers/admin/user.admin";
import { getDashDatas } from "../../controllers/admin/dash.admin";

const router = Router()


router.get("/get-all", getDashDatas)

export default router