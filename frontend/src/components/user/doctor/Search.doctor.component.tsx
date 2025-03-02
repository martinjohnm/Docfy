import { useRecoilState } from "recoil"
import { doctorSearchTermAtom } from "../../../store/atoms/user/doctorsState"




export const SearchDoctorComponent = () => {


    const [_serchTerm,setSearchterm] = useRecoilState(doctorSearchTermAtom)
    

    return (
    <div className='justify-center items-center flex p-2 w-full'> 
        <input onChange={(e) => {
            setSearchterm(e.target.value)
          }} className="h-9 p-2 outline-none border border-black w-[80%]" type="text" />
    </div> )
}