
import express from "express"
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser"
import session from "express-session";
import cors from "cors"
import userAuthhRoute from "./routes/user/auth"
import doctorAuthhRoute from "./routes/doctor/auth.doctor"

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


// doctor routes
app.use("/auth-doctor", doctorAuthhRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
  });