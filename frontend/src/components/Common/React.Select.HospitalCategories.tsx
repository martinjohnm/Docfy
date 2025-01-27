import Select from 'react-select'
import { useEffect, useState } from 'react';
import { useGetHospitalCategories } from '../../hooks/doctor/useGetHospitalCategories';

type OptionType = {
  value: string;
  label: string;
};


export const ReactSelectHospitalCategories = ({onCategoryChange, isDisabledd, hospitalId} : {onCategoryChange : any, isDisabledd? : boolean, hospitalId : string}) => {
    
    const categories = useGetHospitalCategories(hospitalId)
    const [selectedOption, setSelectedOption] = useState<OptionType | null>()


    let categoryOptions = categories.categories?.map(category => ({value : category.id, label : category.name}))


    const handleChange = (option : any) => {
      setSelectedOption(option);
      {option ? onCategoryChange(option.value) : null}
    };

    useEffect(() => {


    }, [selectedOption])


    return <div className=''>     <label className="block mb-2 text-sm font-medium text-black">category</label>
      { isDisabledd ? (
        <Select isDisabled required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="category" options={categoryOptions} onChange={handleChange} />

      ) : (
        <Select  required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="category" options={categoryOptions} onChange={handleChange} />

      )}
</div> 
}