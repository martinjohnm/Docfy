import Select from 'react-select'
import { useEffect, useState } from 'react';
import { useGetCategories } from '../../hooks/admin/useGetCategories';

type OptionType = {
  value: string;
  label: string;
};


export const ReactSelectCategories = ({onCategoryChange, defaultValues, defaultValue} : {onCategoryChange : any, defaultValues? : string[], defaultValue? : string}) => {

    console.log(defaultValue, defaultValues);
    
    const [selectedOption, setSelectedOption] = useState<OptionType | null>()
    const categories = useGetCategories()
    let categoryOptions = categories.categories?.map(category => ({value : category.id, label : category.name}))


    const handleChange = (option : any) => {
      setSelectedOption(option);
      {option ? onCategoryChange(option.value) : null}
    };

    useEffect(() => {


    }, [selectedOption])


    return <div className='w-full h-full'>     <label className="block mb-2 text-sm font-medium text-black">category</label>
       <Select required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="category" options={categoryOptions} onChange={handleChange} />
</div> 
}