


import { useEffect, useState } from "react"
import { adminLogin } from "../../../apis/admin/adminLoginApi"
import { useSetRecoilState } from "recoil"
import { adminAtom, adminTokenAtom, isAdminAuthenticated } from "../../../store/atoms/admin/adminAuthState"
import toast from "react-hot-toast"
import { ADMIN_TOKEN } from "../../../utils/consts"




export const useAdminLogin = () => {


    const setAdminAtom = useSetRecoilState(adminAtom)
    const setAdminBool = useSetRecoilState(isAdminAuthenticated)
    const setAdminToken = useSetRecoilState(adminTokenAtom)


    const [loading, setLoading] = useState<boolean>(true)
    
        useEffect(() => {
    
    
        }, [])

        const adminLoginFn = async ( {email, password} : {email : string, password : string} ) => {
    
    
            const admin = await adminLogin({email, password})

            if (admin.success) {
                console.log(admin.data);
                setLoading(false)
                toast.success("Login successful")
                localStorage.setItem(ADMIN_TOKEN, admin.data.adminToken)
                setAdminAtom(admin.data.admin)
                setAdminToken(admin.data.adminToken)
                setAdminBool(true)
                
            } else {
                toast.error(admin.message)
                setLoading(false)
            }
        }
    
        return {loading, adminLoginFn}
}