import Select from 'react-select'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useGetFilteredDoctor } from '../../../../hooks/user/doctors/useGetFilteredDoctors'
import { OptionType } from '../../../Common/React.Multi.Select.Categories'
import { hospitalIdUserSelected, hospitalsForCategoryIdUserSelected } from '../../../../store/atoms/user/hospitalsUser'



export const ReactSelectHostpitalsUser = () => {


    useGetFilteredDoctor()
    //const setPageStart = useSetRecoilState(filteredDoctorStartOfPage)
    const setHospitalId = useSetRecoilState(hospitalIdUserSelected)
    const hospitalId = useRecoilValue(hospitalIdUserSelected)
    const hospitalAll = useRecoilValue(hospitalsForCategoryIdUserSelected)
  
    let hospitalOptions : OptionType[] = hospitalAll?.map(hospital => ({value : hospital.id, label : hospital.name})) ?? []

    
 
    const handleChange = (e : any) => {
      setHospitalId(e?.value ?? null)
      console.log(e?.value);
      
    }

    const curvalue = hospitalOptions?.find(c => c.value == hospitalId)

 

    return (
      <div className='justify-center items-center flex p-2'> 
            <Select value={curvalue} isClearable required className='border border-gray-300 text-black outline-none text-sm rounded-lg w-96' placeholder="Hospital" options={hospitalOptions} onChange={handleChange} />        
      </div> 
    )
}