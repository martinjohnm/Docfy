import { Router } from "express";
import { createLocationAdmin, getLocationsAdmin } from "../../controllers/admin/location.admin";

const router = Router()


router.post("/create", createLocationAdmin)
router.get("/get-all", getLocationsAdmin)
export default router