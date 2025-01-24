import jwtDecode from "jsonwebtoken";
import { DOCTOR_TOKEN } from "./consts";

export const isAuthDoctor = (): boolean => {
  const token = localStorage.getItem("jwtToken");
  if (!token) return false;

  try {
    const decodedToken : any = jwtDecode.decode(DOCTOR_TOKEN);
    if (!decodedToken || typeof decodedToken === "string") return false;

    // Optional: Check token expiration (if your token includes an `exp` field)
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken?.exp > currentTime;
  } catch (error) {
    console.error("Invalid token", error);
    return false;
  }
};
