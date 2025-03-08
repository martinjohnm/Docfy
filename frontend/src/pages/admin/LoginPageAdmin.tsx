import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminLogin } from "../../hooks/admin/auth/useAdminLogin";
import { geAdminToken } from "../../utils/tokenUtils";
import { useRecoilValue } from "recoil";
import { adminAtom } from "../../store/atoms/admin/adminAuthState";




export const LoginPageAdmin = () => {

    const navi = useNavigate()

    const admin = useRecoilValue(adminAtom)

    useEffect(() => {
      if (admin && geAdminToken()) {
        navi("/admin-dashboard")
      }
    }, [admin])

    
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const {adminLoginFn} = useAdminLogin()


    const handleLogin = () => {
        adminLoginFn({email, password})
    }
    


    return <div className="flex flex-col items-center justify-center h-screen text-textMain bg-slate-500">
    <h1 className="text-4xl font-bold mb-8 text-center text-green-500 drop-shadow-lg">
      Admin-Login
    </h1>
    <div className="bg-slate-700 rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
      
      <div className="flex flex-col items-center">
        
        <input
          type="text"
          placeholder="Email"
          className="border px-4 py-2 rounded-md mb-4 w-full md:w-64"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-4 py-2 rounded-md mb-4 w-full md:w-64"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      
    </div>
  </div>
}