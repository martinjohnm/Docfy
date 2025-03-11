import { useEffect, useState } from "react"
import { DoctorResponseType } from "../../../types/response.types"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { doctorSearchTermAtom, filteredDoctorPageNoofRecords, filteredDoctorsAtom, filteredDoctorStartOfPage, filteredDoctorTotalRecords, selectedDateForFilter } from "../../../store/atoms/user/doctorsState"
import { getDoctorsByFilters } from "../../../apis/user/doctorApi"
import { hospitalIdUserSelected } from "../../../store/atoms/user/hospitalsUser"
import { categoryIdUserSelected } from "../../../store/atoms/user/categories.state"

export const useGetFilteredDoctor = () => {

    
    const [doctors, setDoctors] = useState<DoctorResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
   
    
    const hospitalId = useRecoilValue(hospitalIdUserSelected) ?? ""
    const categoryId = useRecoilValue(categoryIdUserSelected) ?? ""
    const searchTerm = useRecoilValue(doctorSearchTermAtom) ?? ""
    const dateFromStore = useRecoilValue(selectedDateForFilter) ?? ""
    const setTotalFilteredDoctorsCount = useSetRecoilState(filteredDoctorTotalRecords)
    
    const skip = useRecoilValue(filteredDoctorStartOfPage)
    const take = useRecoilValue(filteredDoctorPageNoofRecords)
    
    
    let date = ''
    let dateLoc = ""

    
    if (dateFromStore != "") {
        // const offset = -dateFromStore.getTimezoneOffset();
        // date = dateFromStore.toISOString()
        
        // const sign = offset >= 0 ? '+' : '-';
        // const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
        // const minutes = String(Math.abs(offset) % 60).padStart(2, '0');
        // dateLoc = dateFromStore.toISOString().replace('Z', `${sign}${hours}:${minutes}`);
        
        date = dateFromStore.toISOString()
        dateLoc = dateFromStore.toLocaleString()

    }
    
    const setFilteredDoctors = useSetRecoilState(filteredDoctorsAtom)


    useEffect(() => {

        const getdoctor = async () => {
            
            const doctor = await getDoctorsByFilters({hospitalId, categoryId, searchTerm, date, dateLoc, skip, take})            

            if (doctor.success) {
                setTotalFilteredDoctorsCount(doctor.data.totalFilteredDoctors)
                setDoctors(doctor.data?.doctors ?? null)
                setFilteredDoctors(doctor.data?.doctors)
            } else {
                setLoading(false)
            }
        }

        getdoctor()

    }, [hospitalId, categoryId, searchTerm,date, skip, take])

    return {loading, doctors}
}