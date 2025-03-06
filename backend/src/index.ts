
import express from "express"
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser"
import session from "express-session";
import cors from "cors"

import userAuthhRoute from "./routes/user/auth"
import doctorRoute from "./routes/user/doctor"
import slotRoute from "./routes/user/slot"
import bookingRoute from "./routes/user/booking"
import hospitalRoute from "./routes/user/hospital"
import categoryRoute from "./routes/user/category"


import doctorAuthhRoute from "./routes/doctor/auth.doctor"
import doctorhospitalsRoute from "./routes/doctor/hospitals.doctor"
import doctorEdithRoute from "./routes/doctor/edit.doctor"
import doctorSlotRoute from "./routes/doctor/slot.doctor"
import doctorBookingRoute from "./routes/doctor/patient.doctor"

import categoryAdminRoute from "./routes/admin/category.admin"
import hospitalAdminRoute from "./routes/admin/hospital.admin"
import locationAdminRoute from "./routes/admin/location.admin"
import bookingAdminRoute from "./routes/admin/booking.admin"
import doctorAdminRoute from "./routes/admin/doctor.admin"


import { initPassport } from "./passport";

const app = express();
configDotenv()
initPassport()
app.use(express.json())
app.use(cookieParser())
app.use(
    session({
        secret : process.env.COOKIE_SECRET || "cookie-secret",
        resave : false,
        saveUninitialized : false,
        cookie : { secure : false, maxAge : 24 * 60 * 60 * 1000}
    })
)


const allowedHosts = process.env.ALLOWED_HOSTS
  ? process.env.ALLOWED_HOSTS.split(',')
  : [];


app.use(
    cors({
        origin : allowedHosts,
        methods: 'GET,POST,PUT,DELETE',
        credentials: true
    })
);


// user routes
app.use("/auth", userAuthhRoute)
app.use("/doctor", doctorRoute)
app.use("/slot", slotRoute)
app.use("/booking", bookingRoute)
app.use("/hospital", hospitalRoute)
app.use("/category", categoryRoute)
// doctor routes
app.use("/doctor/auth", doctorAuthhRoute)
app.use("/doctor/edit", doctorEdithRoute)
app.use("/doctor/hospital", doctorhospitalsRoute)
app.use("/doctor/category", doctorhospitalsRoute)
app.use("/doctor/slot", doctorSlotRoute)
app.use("/doctor/booking", doctorBookingRoute)

// admin routes
app.use("/admin/category", categoryAdminRoute)
app.use("/admin/hospital", hospitalAdminRoute)
app.use("/admin/location", locationAdminRoute)
app.use("/admin/booking", bookingAdminRoute)
app.use("/admin/doctor", doctorAdminRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
  });