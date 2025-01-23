import Select, { MultiValue } from 'react-select'
import { useEffect } from 'react';
import { useGetCategories } from '../../hooks/admin/useGetCategories';

export type OptionType = {
  value: string;
  label: string;
};


export const ReactMultiSelectCategories = ({onCategoryChange, defaultValues} : {onCategoryChange : any, defaultValues? : OptionType[] | null}) => {

    const categories = useGetCategories()
    let categoryOptions = categories.categories?.map(category => ({value : category.id, label : category.name}))



    const handleChange = (newValue: MultiValue<OptionType>) => {

      onCategoryChange(newValue.map((option) => ({id : option.value, name : option.label})))
      
    };

    useEffect(() => {
      
    }, [defaultValues])


    return <div className='w-full h-full'>     <label className="block mb-2 text-sm font-medium text-black">category</label>

       <Select isMulti required className='border border-gray-300 text-black outline-none text-sm rounded-lg' placeholder="category" options={categoryOptions} value={defaultValues} onChange={handleChange} />
</div> 
}