import Select from 'react-select'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { useGetCategoriesForHospital } from '../../../../hooks/user/react.selects/useGetCategoriesForHospital'
import { doctorCategoryFilterAtom } from '../../../../store/atoms/user/hospitalsUser'
import { categoriesByHospitalIdAtom } from '../../../../store/atoms/user/categories.state'
import { useGetFilteredDoctor } from '../../../../hooks/user/doctors/useGetFilteredDoctors'
import { filteredDoctorStartOfPage } from '../../../../store/atoms/user/doctorsState'



export const ReactSelectCategorysUser = () => {

    useGetCategoriesForHospital()
    useGetFilteredDoctor()

    const [selectedCategory, setSelectedCategory] = useRecoilState(doctorCategoryFilterAtom)
    const categories = useRecoilValue(categoriesByHospitalIdAtom)
    const setPageStart = useSetRecoilState(filteredDoctorStartOfPage)
    
    let categoryOptions = categories?.map(category => ({value : category.id, label : category.name}))

    const curvalue = categoryOptions?.find(category => category.value === selectedCategory) ?? null
    if (!curvalue) {
      setSelectedCategory(null)
    }

    

    const handleChange = (option : any) => {
    
      if (option){
        setSelectedCategory(option.value)
      } else {
        setSelectedCategory(null)
      }

      setPageStart(0)

    };



    return (
    <div className='justify-center items-center flex p-2'> 
          <Select isClearable value={curvalue} required className='border border-gray-300 text-black outline-none text-sm rounded-lg w-96' placeholder="Department" options={categoryOptions} onChange={handleChange} />        
    </div> )
}