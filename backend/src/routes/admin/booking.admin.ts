import { Router } from "express";
import { createCategoryAdmin, getCategoriesAdmin } from "../../controllers/admin/category.admin";
import { getAllBookingsAdmin, getAllBookingsAdminCanceld, getAllBookingsAdminCompleted, getAllBookingsAdminUpcoming } from "../../controllers/admin/booking.admin";

const router = Router()


router.get("/get-all", getAllBookingsAdmin)
router.get("/get-upcoming", getAllBookingsAdminUpcoming)
router.get("/get-completed", getAllBookingsAdminCompleted)
router.get("/get-canceled", getAllBookingsAdminCanceld)



export default router