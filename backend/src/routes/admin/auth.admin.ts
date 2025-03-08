import { Router } from "express";
import { createCategoryAdmin, getCategoriesAdmin } from "../../controllers/admin/category.admin";
import { getAllBookingsAdmin, getAllBookingsAdminCanceld, getAllBookingsAdminCompleted, getAllBookingsAdminUpcoming } from "../../controllers/admin/booking.admin";
import { adminLogin, adminLogout, getadmin } from "../../controllers/admin/auth.admin";
import { adminMiddleWare } from "../../middlewares/adminMiddleWare";

const router = Router()


router.post("/login", adminLogin)
router.post("/logout",adminMiddleWare,  adminLogout)
router.get("/get-admin", adminMiddleWare, getadmin)

export default router