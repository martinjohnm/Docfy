import { useRecoilState } from "recoil"
import { doctorSearchTermAtom } from "../../../store/atoms/user/doctorsState"




export const SearchDoctorComponent = () => {


    const [serchTerm,setSearchterm] = useRecoilState(doctorSearchTermAtom)
    

    return (
    <div className='justify-center items-center flex p-2 w-full'> 
        <input value={serchTerm ?? ""}  onChange={(e) => {
            setSearchterm(e.target.value)
          }} 
          placeholder="Search for doctors" 
          className="h-9 p-2 outline-none border rounded-md border-black w-[80%]" type="text" />
    </div> )
}