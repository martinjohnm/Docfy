import { Router } from "express";
import passport from "passport"
import { generatToken } from "../../utils";
import { doctorLogin, doctorLogout, DoctorSignup, getDoctor } from "../../controllers/doctor/auth.doctor";
import { doctorMiddleWare } from "../../middlewares/doctorMiddleWare";


const router = Router()
const CLIENT_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';



router.post("/login", doctorLogin)
router.post("/signup", DoctorSignup)
router.get('/google-doctor', passport.authenticate('google-doctor', {
         scope: ['profile', 'email'] 
}),);
router.get('/google-doctor/callback',
    passport.authenticate('google-doctor', {
        failureRedirect: `${CLIENT_URL}/login/failed`,
        session : false
    }),
    (req, res) => {
        const user = req.user as any;
        const token = generatToken({id : user.id, email : user.email})
        
        res.redirect(`${CLIENT_URL}/google-callback-doctor/?token=${token}&email=${user.email}`); // Redirect to frontend
      }
);

router.get("/doctor",doctorMiddleWare, getDoctor)
router.post("/logout",doctorMiddleWare, doctorLogout)

export default router