import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDoctorToken } from "../../utils/tokenUtils";
import { useDoctor } from "../../store/hooks/useDoctor";
import { doctorGoogelLogin } from "../../apis/doctor/doctorAuthApis";
import { useSetRecoilState } from "recoil";
import { doctorAtom } from "../../store/atoms/authDoctorState";
import { DoctorLoginInput } from "../../types/zod.types";
import { useDoctorLogin } from "../../hooks/doctor/useDoctorLogin";
import { DoctorResponseType } from "../../types/response.types";



export const LoginPageDoctor = () => {

    const navi = useNavigate()
    const doctor = useDoctor()
    const setRecoilDoctor = useSetRecoilState(doctorAtom)

    const doctorLogin = useDoctorLogin()

    // const doc = useRecoilValue(doctorAtom)


    useEffect(() => {
      if (doctor.isAuthenticated && getDoctorToken()) {
        navi("/doctor")
      }
    }, [doctor])


  
    
    const [postInputs, setPostInputs] = useState<DoctorLoginInput>({
          
          email : "",
          password : ""
      })


    const [_doctor, setDoctor] = useState<DoctorResponseType | null>(null)
      
    const google = () => {
        window.open(doctorGoogelLogin(), '_self');
    };

    
    const Login = async () => {
      const docNew = await doctorLogin.loginDoctorr(postInputs)      
        if (docNew?.success) {
          setDoctor(docNew.data.doctor)
          setRecoilDoctor({
              isAuthenticated : true,
              doctor : docNew.data.doctor,
              token : docNew.token
          })
          navi("/doctor")
        } else {
          // alert("invalid credentials")
        }
      
    };


    return <div className="flex flex-col items-center justify-center h-screen text-textMain bg-slate-500">
    <h1 className="text-4xl font-bold mb-8 text-center text-green-500 drop-shadow-lg">
      Login Doctor
    </h1>
    <Link to={"/doctor-signup"}>
        <h2 className="mb-2 text-blue-200">Dont have an account? <span className="underline hover:text-blue-400 cursor-pointer">Signup</span></h2>
    </Link>
    <div className="bg-slate-700 rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
      <div className="mb-8 md:mb-0 md:mr-8 justify-center flex flex-col">
        <div
          className="flex items-center shadow-2xl text-slate-400 hover:text-slate-900 justify-center px-4 py-2 rounded-md mb-4 cursor-pointer transition-colors hover:bg-slate-600 duration-300"
          onClick={google}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC" alt="" className="w-6 h-6 mr-2" />
            Sign in with Google
        </div>
      </div>
      <div className="flex flex-col items-center md:ml-8">
        <div className="flex items-center mb-4">
          <div className="bg-gray-600 h-1 w-12 mr-2"></div>
          <span className="text-gray-400">OR</span>
          <div className="bg-gray-600 h-1 w-12 ml-2"></div>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="border px-4 py-2 rounded-md mb-4 w-full md:w-64"
          onChange={(e : ChangeEvent<HTMLInputElement>) => {
                          setPostInputs(c => ({
                              ...c,
                              email : e.target.value
                          }))
                      }}
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-4 py-2 rounded-md mb-4 w-full md:w-64"
          onChange={(e : ChangeEvent<HTMLInputElement>) => {
            setPostInputs(c => ({
                ...c,
                password : e.target.value
            }))
        }}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
          onClick={Login}
        >
          Login
        </button>
      </div>
      
    </div>
  </div>
}