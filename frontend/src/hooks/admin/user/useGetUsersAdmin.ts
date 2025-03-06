





import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { selectedusersPageNumberAdmin, totalNoOfuserssAdmin, userssByAdminAtom, userssTakePaginationAdmin } from "../../../store/atoms/admin/usersAdminAtoms"
import { getUsersAdmin } from "../../../apis/admin/adminUserApi"





export const useGetUsersAdmin = () => {

    const [loading, setLoading] = useState<boolean>(true)

    const take = useRecoilValue(userssTakePaginationAdmin)
    const setDocotrs = useSetRecoilState(userssByAdminAtom)
    const seletedPageNo = useRecoilValue(selectedusersPageNumberAdmin)
    const setTotalNoOfDoctors = useSetRecoilState(totalNoOfuserssAdmin)


    useEffect(() => {

        const getUsers = async ( ) => {

            let skip = seletedPageNo-1

            const users = await getUsersAdmin({skip, take})

            if (users.success) {
                setDocotrs(users.data.users)
                setTotalNoOfDoctors(users.data.totalNoOfUsers)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        getUsers()

    }, [seletedPageNo])

    return {loading}
}