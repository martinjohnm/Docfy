import Select from 'react-select'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { useGetHospitals } from '../../../../hooks/user/react.selects/useGetHospitals'
import { doctorAllHospitalsForReactselect, doctorHospitalFilterAtom } from '../../../../store/atoms/user/hospitalsUser'
import { useGetFilteredDoctor } from '../../../../hooks/user/doctors/useGetFilteredDoctors'
import { filteredDoctorStartOfPage } from '../../../../store/atoms/user/doctorsState'



export const ReactSelectHostpitalsUser = () => {


    useGetHospitals()
    useGetFilteredDoctor()
    const [selectedHospital, setSelectedHospital] = useRecoilState(doctorHospitalFilterAtom)
    const setPageStart = useSetRecoilState(filteredDoctorStartOfPage)

    const hospitals = useRecoilValue(doctorAllHospitalsForReactselect)
    let hospitalOptions = hospitals?.map(hospital => ({value : hospital.id, label : hospital.name}))
      
    const handleChange = (option : any) => {
    
      if (option){
        setSelectedHospital(option.value)
      } else {
        setSelectedHospital(null)
      }

      setPageStart(0)

    };

    const curvalue = hospitalOptions?.find(hospital => hospital.value === selectedHospital)


    return (
      <div className='justify-center items-center flex p-2'> 
            <Select isClearable value={curvalue} required className='border border-gray-300 text-black outline-none text-sm rounded-lg w-96' placeholder="Hospital" options={hospitalOptions} onChange={handleChange} />        
      </div> 
    )
}