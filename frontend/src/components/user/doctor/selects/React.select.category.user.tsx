import Select from 'react-select'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { categoriesForHospitalIdUserSelected, categoryIdUserSelected } from '../../../../store/atoms/user/categories.state'
import { useGetFilteredDoctor } from '../../../../hooks/user/doctors/useGetFilteredDoctors'
import { OptionType } from '../../../Common/React.Multi.Select.Categories'
import { useGetHospitalsForCategoryIdSelected } from '../../../../hooks/user/react.selects/useGetHospitalsForCategoryIdSelected'
import { useGetCategoriesForHospitalIdSelected } from '../../../../hooks/user/react.selects/useGetCategoriesForHospitalIdSelected'



export const ReactSelectCategorysUser = () => {

    useGetFilteredDoctor()
    useGetHospitalsForCategoryIdSelected()
    useGetCategoriesForHospitalIdSelected()

    const categoriesAll = useRecoilValue(categoriesForHospitalIdUserSelected)
    const setCategoryId = useSetRecoilState(categoryIdUserSelected)
    const categoryId = useRecoilValue(categoryIdUserSelected)


    //const setPageStart = useSetRecoilState(filteredDoctorStartOfPage)

    let categoryOptions : OptionType[] = categoriesAll?.map(cat => ({value : cat.id, label : cat.name})) ?? []

 
  
    const handleChange = (e : any) => {
        setCategoryId(e?.value ?? null)
 
    }

    const curvalue = categoryOptions.find(c => c.value == categoryId)

 

    return (
    <div className='justify-center items-center flex p-2'> 
          <Select 
          value={curvalue}
          isClearable required className='border border-gray-300 text-black 
          outline-none text-sm rounded-lg w-96' 
          placeholder="Department" 
          options={categoryOptions}  onChange={handleChange}/>        
    </div> )
}