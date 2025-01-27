import { configDotenv } from "dotenv";
import passport from "passport";
import db from "./db"

configDotenv()
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const CALLBACK_URL = process.env.BACKEND_URL


const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID || 'your_google_client_id';
const GOOGLE_CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret';


const GOOGLE_DOCTOR_ID =
  process.env.GOOGLE_DOCTOR_ID || 'your_google_doctor_id';
const GOOGLE_DOCTOR_SECRET =
  process.env.GOOGLE_DOCTOR_SECRET || 'your_google_doctor_secret';



export function initPassport() {
    if (
        !GOOGLE_CLIENT_ID || 
        !GOOGLE_CLIENT_SECRET ||
        !GOOGLE_DOCTOR_ID ||
        !GOOGLE_DOCTOR_SECRET
    ) {
        throw new Error(
            'Missing environment variables for authentication providers',
        )
    }

    passport.use(
        "google-user",
        new GoogleStrategy(
            {
                clientID: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
                callbackURL: `${CALLBACK_URL}/auth/google/callback`,
            },
            async function(
                accessToken : string, 
                refreshToken : string,
                profile : any,
                done : (error : any, user? : any) => void
            ) {

        
                const user = await db.user.upsert({
                    create : {
                        email : profile.emails[0].value,
                        name : profile.displayName,
                        provider : "GOOGLE",
                        lastLogin : new Date(),
                        isVerified : true
                    }, 
                    update : {
                        name : profile.displayName,
                        email : profile.emails[0].value,
                    },
                    where : {
                        email : profile.emails[0].value,
                    }

                })

       
                
                done(null, user)
                
            }
            
        )
    )


    passport.use(
        "google-doctor",
        new GoogleStrategy(
            {
                clientID: GOOGLE_DOCTOR_ID,
                clientSecret: GOOGLE_DOCTOR_SECRET,
                callbackURL: `${CALLBACK_URL}/doctor/auth/google-doctor/callback`,
            },
            async function(
                accessToken : string, 
                refreshToken : string,
                profile : any,
                done : (error : any, user? : any) => void
            ) {

        
                const user = await db.doctor.upsert({
                    create : {
                        email : profile.emails[0].value,
                        name : profile.displayName,
                        provider : "GOOGLE"
                    }, 
                    update : {
                        name : profile.displayName,
                        email : profile.emails[0].value,
                    },
                    where : {
                        email : profile.emails[0].value,
                    }

                })

       
                
                done(null, user)
                
            }
            
        )
    )

    passport.serializeUser(function (user : any, cb) {
        process.nextTick(function () {
            return cb(null, {
                id : user.id,
                email : user.email,

            })
        })
    })

    passport.deserializeUser(function (user: any, cb) {
        process.nextTick(function () {
            return cb(null, user);
            });
    });
}
