import Select from 'react-select'
import { useGetlocations } from '../../hooks/admin/useGetLocations';

type OptionType = {
  value: string;
  label: string;
};


interface ChildSelectProps {
  selectedCategory: string;
  onCategoryChange: (value: OptionType["value"] | null) => void;
}

export const ReactSelectHospitals : React.FC<ChildSelectProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {

    const locations = useGetlocations()

    let locationOptions : OptionType[] = [{value : "", label : ""}]

    if (!locations.locations) {
      return  <Select className='' options={locationOptions} />
    }
    
    locationOptions = locations.locations.map(loccation => ({value : loccation.id, label : loccation.city}))


    //@ts-ignore
    return <div> <Select className='' options={locationOptions} onChange={onCategoryChange} value={selectedCategory} /> <p>Selected Option: {selectedCategory}</p>
</div> 
}