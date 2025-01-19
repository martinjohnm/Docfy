import { Router } from "express";
import passport from "passport"
import { generatToken } from "../../utils";
import { userMiddleWare } from "../../middlewares/userMiddleWare";
import { getUser, userLogin, userLogout, userSignup } from "../../controllers/user/auth.user";


const router = Router()
const CLIENT_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';


router.post("/login", userLogin)
router.post("/signup", userSignup)
router.get('/google', passport.authenticate('google-user', {
         scope: ['profile', 'email'] 
}),);
router.get('/google/callback',
    passport.authenticate('google-user', {
        failureRedirect: `${CLIENT_URL}/login/failed`,
        session : false
    }),
    (req, res) => {
        const user = req.user as any;
        const token = generatToken({id : user.id, email : user.email})
        
        res.redirect(`${CLIENT_URL}/google-callback/?token=${token}&email=${user.email}`); // Redirect to frontend
      }
);

router.get("/user",userMiddleWare, getUser)
router.post("/logout",userMiddleWare, userLogout)

export default router
