


import { useEffect, useState } from "react"
import { adminLogout } from "../../../apis/admin/adminLoginApi"
import { useSetRecoilState } from "recoil"
import { adminAtom, adminTokenAtom, isAdminAuthenticated } from "../../../store/atoms/admin/adminAuthState"
import toast from "react-hot-toast"
import { ADMIN_TOKEN } from "../../../utils/consts"




export const useAdminLogout = () => {


    const setAdminAtom = useSetRecoilState(adminAtom)
    const setAdminBool = useSetRecoilState(isAdminAuthenticated)
    const setAdminToken = useSetRecoilState(adminTokenAtom)


    const [loading, setLoading] = useState<boolean>(false)
    
        useEffect(() => {
    
    
        }, [])

    const adminLogoutFn = async () => {


        setLoading(true)

        const admin = await adminLogout()

        if (admin.success) {
            setLoading(false)
            toast.success("Logged out ")
            localStorage.removeItem(ADMIN_TOKEN)
            setAdminAtom(null)
            setAdminToken(null)
            setAdminBool(false)
            
        } else {
            toast.error(admin.message)
            setLoading(false)
        }
    }
    
    return {loading, adminLogoutFn}
}