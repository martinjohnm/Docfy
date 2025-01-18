import { CiBellOn, CiTwitter } from "react-icons/ci"
import { FiFacebook } from "react-icons/fi"
import { PiSkypeLogoLight, PiTelegramLogoThin } from "react-icons/pi"




export const HomeFooter = () => {
    return  <div className="bg-[#061e34] rounded-md w-full">

            <div className="lg:grid lg:grid-cols-2 py-10 max-w-7xl container mx-auto p-4">
                <div className="col-span-1">
                    <img className="h-14" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/07/logo.png" alt="" />
                </div>
                <div className="col-span-1">
                    <div>
                        <p className="text-white font-lg text-4xl">Medicross Health Care Center.
                        </p>
                    </div>
                </div>
            </div>   
        
            <div className="lg:grid lg:grid-cols-3 py-10 max-w-7xl container mx-auto justify-center p-4">
                <div className="col-span-1 text-white max-w-lg mt-6 lg:mt-0">
                    <div>
                        <p className="font-lg text-xl">Contact With Us!
                        </p>
                    </div>
                    <div className="mt-4">
                        <p>Address: 511 SW 10th Ave 1206, Portland, OR United States</p>
                    </div>
                    <div className="mt-2">
                        <p>Support mail:  Medicrosshealth@gmail.com</p>
                    </div>
                    <div className="mt-2">
                        <p >Opening Hours: Mon -Sat: 7.00am – 19.00pm</p>
                    </div>
                </div>
                <div className="col-span-1 text-white lg:justify-center lg:flex max-w-lg mt-6 lg:mt-0">
                    <div>
                        <div>
                            <p className="font-lg text-xl">Service Links
                            </p>
                        </div>
                        <div className="mt-4">
                            <Categories title="Lung diseases"/>
                            <Categories title="Lung diseases"/>
                            <Categories title="Lung diseases"/>
                            <Categories title="Lung diseases"/>
                            <Categories title="Lung diseases"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 max-w-lg mt-6 lg:mt-0">
                    <div >
                        <p className="font-lg text-xl text-white">Subscribe to Newsletter
                        </p>
                    </div>
                    <div className="grid grid-cols-5 mt-4 justify-center  text-white">
                        
                        <div className="col-span-1">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500">
                                <CiBellOn/>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <p>
                            Please sign up to follow the latest news and events from us, we promise not to spam your inbox.</p>
                        </div>
                    </div>
                    <div className="w-full mt-2">
                        <input className="p-4 w-full outline-none rounded-md cursor-auto" type="email" placeholder="Email adress" />
                    </div>
                    <div className="w-full mt-2 text-white flex gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500">
                                <FiFacebook/>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500">
                                <CiTwitter/>
                        </div><div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500">
                                <PiSkypeLogoLight/>
                        </div><div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500">
                                <PiTelegramLogoThin/>
                        </div>
                    </div>
                </div>
            </div>
            
               
        </div>
}


export const  Categories = ({title} : {title : string}) => {
    return <div className="">
        <p>{title}</p>
    </div>
}