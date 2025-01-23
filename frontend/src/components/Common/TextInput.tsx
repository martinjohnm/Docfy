import { ChangeEvent } from "react";


interface TextInput {
    type : "email" | "password" | "text", 
    label : string, placeholder : string,     
    onChange : (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue? : string
    
}

export const TextInput = ({type, label, placeholder, onChange, defaultValue} : TextInput) => {
    return  <div className="w-full h-full">
    <label className="block mb-2 text-sm font-medium text-black">{label}</label>
    <input defaultValue={`${defaultValue ? defaultValue : ""}`} onChange={onChange} type={type} id="first_name" className=" border border-gray-300 text-black outline-none text-sm rounded-lg p-2" placeholder={placeholder} required />
</div>  
}