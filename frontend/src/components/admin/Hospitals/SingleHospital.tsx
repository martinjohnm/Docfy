import { TextInput } from "../../Common/TextInput"
import { useNavigate, useParams } from "react-router-dom"
import { SingleHospitalNavbar } from "./SingleHospitalNavbar"
import { ReactMultiSelectCategories } from "../../Common/React.Multi.Select.Categories"
import { ChangeEvent, useEffect, useState } from "react"
import { HospitalUpdateInput } from "../../../types/zod.types"
import { ReactSelectLocations } from "../../Common/ReactSelectLocations"
import { updateHospital } from "../../../apis/admin/adminHospital"
import { useGetSingleHospital } from "../../../hooks/admin/hospitals/useGetSingleHospital"



export const SingleHospital = () => {

    const { id } = useParams();
    if (!id) {
        return <div>ID is required but not found.</div>;
    }
    const {hospital} = useGetSingleHospital(id)
    const [postInputs, setpostInputs] =  useState<HospitalUpdateInput | null>(null)

    useEffect(() => {
        setpostInputs(hospital)
    }, [hospital])


    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1)
    }

    const handleSubmit = async () => {
        if (postInputs){
            await updateHospital({hospitalId : id, postInputs : postInputs})
        }
    }
    
 

    return <div className="w-full h-full overflow-auto bg-slate-300">
                    <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
                        <SingleHospitalNavbar/>
                    </div>
                    <div className="lg:max-w-3xl p-6 mx-auto container mt-4">
                        <div className="w-full h-full p-4 bg-white mx-auto container rounded-lg">
                            <div className="text-lg font-semibold w-full h-full">
                                {hospital?.name}
                            </div>
                       

                            <TextInput defaultValue={postInputs?.name} label="Name" placeholder="ABC" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                    setpostInputs(c => ({
                                        ...c,
                                        name : e.target.value
                                    }))
                            }} type="text"/>
                         
                            <ReactSelectLocations onLocationChange={(locationId : string) => {
                                setpostInputs(c => ({
                                    ...c,
                                    locationId 
                                }))
                            }} defaultValue={postInputs?.locationId} />
                            
                            <ReactMultiSelectCategories onCategoryChange={(categories : SingelCatType[]) => {
                                    setpostInputs(c => ({
                                        ...c,
                                        categories 
                                    }))
                            }} defaultValues={postInputs?.categories?.map((cat) => ({value : cat.id, label : cat.name})) }/>
                            
                        </div>
                        <div className="w-full h-full p-4 bg-white mx-auto container rounded-lg mt-2 justify-start items-center flex gap-2">
                            <button onClick={handleGoBack} className="px-4 bg-red-600 rounded-md text-white text-base py-1">Cancel</button>
                            <button onClick={handleSubmit} className="px-4 bg-green-600 rounded-md text-white text-base py-1">Update</button>
                        </div>
                      
                    </div>
                </div>
    }

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>




type SingelCatType = {
    id : string,
    name : string
}