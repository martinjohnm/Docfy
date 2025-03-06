
import { useEffect, useState } from "react"
import { getDoctorsAdmin } from "../../../apis/admin/adminDoctorApi"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { doctorsByAdminAtom, doctorsTakePaginationAdmin, selectedDoctorPageNumberAdmin, totalNoOfdoctorsAdmin } from "../../../store/atoms/admin/doctorsAdminAtoms"





export const useGetDoctorsAdmin = () => {

    const [loading, setLoading] = useState<boolean>(true)

    const take = useRecoilValue(doctorsTakePaginationAdmin)
    const setDocotrs = useSetRecoilState(doctorsByAdminAtom)
    const seletedPageNo = useRecoilValue(selectedDoctorPageNumberAdmin)
    const setTotalNoOfDoctors = useSetRecoilState(totalNoOfdoctorsAdmin)


    useEffect(() => {

        const getdoctors = async ( ) => {

            let skip = seletedPageNo-1

            const doctors = await getDoctorsAdmin({skip, take})

            if (doctors.success) {
                setDocotrs(doctors.data.doctors)
                setTotalNoOfDoctors(doctors.data.totalNoOfDoctors)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        getdoctors()

    }, [seletedPageNo])

    return {loading}
}