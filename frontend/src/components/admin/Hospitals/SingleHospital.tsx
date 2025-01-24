import { TextInput } from "../../Common/TextInput"
import { useParams } from "react-router-dom"
import { SingleHospitalNavbar } from "./SingleHospitalNavbar"
import { ReactMultiSelectCategories } from "../../Common/React.Multi.Select.Categories"
import { ChangeEvent, useEffect, useState } from "react"
import { HospitalUpdateInput } from "../../../types/zod.types"
import { useGetSingleHospital } from "../../../hooks/admin/useGetSingleHospital"
import { ReactSelectLocations } from "../../Common/ReactSelectLocations"



export const SingleHospital = () => {

    const { id } = useParams();
    if (!id) {
        return <div>ID is required but not found.</div>;
    }
    const {hospital} = useGetSingleHospital(id)
    const [postInputs, setpostInputs] =  useState<HospitalUpdateInput | null>(hospital)

    useEffect(() => {
        setpostInputs(hospital)
    }, [hospital])


    console.log(postInputs);
    
 

    return <div className="w-full h-full overflow-auto bg-slate-300">
                    <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
                        <SingleHospitalNavbar/>
                    </div>
                    <div className="lg:max-w-[60%] mx-auto container mt-4">
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
                         
                            <ReactSelectLocations onCategoryChange={(locationId : string) => {
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
                      
                    </div>
                </div>
    }

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>




type SingelCatType = {
    id : string,
    name : string
}