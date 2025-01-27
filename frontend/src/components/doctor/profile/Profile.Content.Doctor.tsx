
import { ChangeEvent, useEffect, useState } from "react"
import { useGetDoctor } from "../../../hooks/doctor/useGetDoctor"
import { ReactSelectHospitals } from "../../Common/React.Select.Hospitals"
import { TextInput } from "../../Common/TextInput"
import { DoctorUpdateInput } from "../../../types/zod.types"
import { ReactSelectHospitalCategories } from "../../Common/React.Select.HospitalCategories"
import { DoctorResponseType } from "../../../types/response.types"
import { useUpdateDoctor } from "../../../hooks/doctor/useUpdateDoctor"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { doctorAtom } from "../../../store/atoms/authDoctorState"



export const ProfileContentDoctor = () => {

    const doctorFromDb = useGetDoctor()
    const updateDoc = useUpdateDoctor()

    const doctorInAtom = useRecoilValue(doctorAtom)
    const setRecoilDoctor = useSetRecoilState(doctorAtom)

    const [postInputs, setPostinputs] = useState<DoctorUpdateInput | null>(null)
    const [doctor, setDoctor] = useState<DoctorResponseType | null>(null)
    const [isToggle, setToggle] = useState<boolean>(false)


    useEffect(() => {
        setDoctor(doctorFromDb.doctor)
    }, [doctorFromDb])  
    
    useEffect(() => {
        
    }, [updateDoc, doctor])

    const onSubmit = async () => {
        if (postInputs){
            const docNew = await updateDoc.updateDoctor(postInputs)      
            if (docNew?.success) {
                console.log(docNew.data.doctor.specialization?.name , doctor?.specialization?.name);
                setDoctor(docNew.data.doctor)
                setRecoilDoctor({
                    isAuthenticated : true,
                    doctor : docNew.data.doctor,
                    token : ""
                })
            }
            console.log(docNew);
            
        } else {
            alert("nothing changed")
        }
    }


    return <div className="bg-[#DAEAF5] rounded-md w-full p-4 relative mt-2 min-h-svh">

        <div className="max-w-5xl container mx-auto gap-2 justify-center items-center">
            <div className="py-4 rounded-md p-2 bg-white justify-between flex">
                <p className="font-semibold text-xl"><span>{"Welcome Back "}</span> Dr {doctorInAtom.doctor?.name}, Complete Your profile!!</p>
                <button onClick={() => setToggle(c => !c)} className={`${!isToggle ? "bg-red-500 hover:bg-red-800" : "bg-green-500 hover:bg-green-800"} px-2 text-base font-semibold text-white rounded-lg`}>{isToggle ? "View" : "Edit"}</button>
            </div>
        </div>

        
        {/* Profile view only section */}
        <div className={`${!isToggle ? "" : "hidden"}`}>
            <div className="max-w-5xl container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                <div className="lg:col-span-1 md:col-span-1 bg-white rounded-lg">
                    <div className="flex items-center justify-center">
                        <div className="h-28 w-28 mt-2 rounded-full flex items-center justify-center">
                            <img className="h-28 w-28 rounded-full" src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=826" alt="" />
                        </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                        <p className="font-semibold text-xl">{doctorInAtom.doctor?.name}</p>
                        
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                        <p className="font-medium text-base">{doctorInAtom.doctor?.email}</p>
                    </div>
                </div>

                <div className="lg:col-span-2 md:col-span-1 bg-white min-h-96 rounded-md">
                    <Table label="Hospital" value={doctorInAtom.doctor?.hospital?.name}/>
                    <Table label="Specialization" value={doctorInAtom.doctor?.specialization?.name}/>
                </div>
            </div>
        </div>

        {/* Profile edit section */}

        <div className={`${isToggle ? "" : "hidden"}`}>
            <div className="max-w-5xl min-h-96 container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                <div className="lg:col-span-1 md:col-span-1 bg-white rounded-lg">
                    <div className="flex items-center justify-center">
                        <div className="h-28 w-28 mt-2 rounded-full flex items-center justify-center">
                            <img className="h-28 w-28 rounded-full" src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=826" alt="" />
                        </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center p-2 ">
                        <div>
                            <TextInput  defaultValue={doctor?.name} type="text" label="Name" placeholder="John Doe" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                setPostinputs(c => ({
                                    ...c,
                                    name : e.target.value
                                }))
                            }}/>
                            <TextInput  defaultValue={doctor?.email} type="text" label="Email" placeholder="john@gmail.com" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                setPostinputs(c => ({
                                    ...c,
                                    email : e.target.value
                                }))
                            }}/>
                            { !doctor?.password ? (<div>
                                    <p className="text-sm py-2">{"Password not set yet create one!"}</p>
                            <TextInput type="password" label="Password" placeholder="New Passoword" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                setPostinputs(c => ({
                                    ...c,
                                    password : e.target.value
                                }))
                            }}/>
                            <TextInput type="password" label="Confirm password" placeholder="Retype password" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                setPostinputs(c => ({
                                    ...c,
                                    confirmPassword : e.target.value
                                }))
                            }}/>
                            </div>) : (
                                <div>
                                    <p className="text-sm mt-2">{"Change password!"}</p>
                                    <TextInput type="password" label="Old Password" placeholder="old Password" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                        setPostinputs(c => ({
                                            ...c,
                                            oldPassword : e.target.value
                                        }))
                                    }}/>
                                    <TextInput type="password" label="New Password" placeholder="New Password" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                        setPostinputs(c => ({
                                            ...c,
                                            password : e.target.value
                                        }))
                                    }}/>
                                    <TextInput type="password" label="Retype New Password" placeholder="confirm new Password" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                        setPostinputs(c => ({
                                            ...c,
                                            confirmPassword : e.target.value
                                        }))
                                    }}/>
                                </div>
                            )}
                        </div>
                    </div>
                    
                </div>

                <div className="lg:col-span-2 md:col-span-1 bg-white rounded-md p-2 mt-2 md:mt-0">
                 
                        <div>
                        <HospitalCategoryElement onHospitalChange={(hospitalId : string) => {
                                setPostinputs(c => ({
                                    ...c,
                                    hospitalId 
                                }))
                            }} onCategoryChange={(specializationId : string) => {
                                setPostinputs(c => ({
                                    ...c,
                                    specializationId 
                                }))
                            }} hospitalId={postInputs?.hospitalId ?? null}/>
                        <div>
                          
                        </div>
                        </div>
              
                </div>

            
            </div>
            <div className="bg-white rounded-lg shadow-lg mt-2 max-w-5xl container mx-auto p-6">
                <div className="w-full flex justify-center items-center">
                    <div className="w-full justify-center items-center flex gap-4">
                        <button onClick={() => setToggle(c => !c)} className="bg-red-600 hover:bg-red-900 px-4 py-2 rounded-md text-white text-base font-semibold">cancel</button>
                        <button onClick={onSubmit} className="bg-green-600 hover:bg-green-900 px-4 py-2 rounded-md text-white text-base font-semibold">submit</button>
                    </div>
                </div>
            </div>
        </div>

   
        
</div>
}

const Table = ( {value, label} : {value : string | undefined, label : string}) => {
    return(
    <div className="grid grid-cols-3 rounded-md p-2">
                    <div className="col-span-1 bg-slate-100 text-base font-medium p-4">
                        <p>{label} : </p>
                    </div>
                    <div className="col-span-2 bg-slate-100 text-base font-medium p-4">
                        <p>{value ?? "Not selected"}</p>
                    </div>
    </div> )
}

const HospitalCategoryElement = ({onCategoryChange, onHospitalChange, hospitalId} : {onCategoryChange : any, onHospitalChange : any, hospitalId : string | null}) => {

    useEffect(() => {
        setHospitalId(hospitalId)
        
    }, [hospitalId])

    const [hostpitalId, setHospitalId] = useState<string | null>(hospitalId)
    
    return <div>
        {hostpitalId ?  (
            <div>
            <ReactSelectHospitals hostpitalId={hospitalId ?? undefined} onHospitalChange={onHospitalChange}/>
            <ReactSelectHospitalCategories hospitalId={hostpitalId} onCategoryChange={onCategoryChange}/>
            </div>
        ) : (
            <ReactSelectHospitals onHospitalChange={onHospitalChange}/>
        ) }
       
    </div>
}


