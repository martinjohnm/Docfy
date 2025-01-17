import { BsFileBarGraph } from "react-icons/bs"
import { CiBookmark } from "react-icons/ci"
import { FaRegUserCircle, FaUmbrella } from "react-icons/fa"
import { PiCrownSimpleFill } from "react-icons/pi"
import { TfiMoney } from "react-icons/tfi"



export const HomeWhyChoose = () => {
    return <div className="bg-[#DAEAF5] rounded-md w-full p-4 relative mt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl container mx-auto min-h-96">
            <div className="col-span-6 lg:py-10 px-2 flex items-center justify-center">
                <div className="">
                    <div className="flex gap-2 items-center">
                        <img className="w-4 h-4" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/08/ic2.png" alt="" />
                        <p className="text-black text-lg">We Provide the Best Service for your Health </p>
                    </div>
                    <div className="">
                        <p className="text-black lg:text-5xl md:text-3xl text-2xl mt-4">Why Choose Docdy?</p>
                        <p className="text-slate-500 text-base mt-4">Health professionals use a wide range of instruments to diagnose and treat a disease or other condition, to prevent a worsening of symptoms, to replace a damaged part.</p>
                    </div>
                    <hr className="h-px my-4 bg-white border-0"/>
                </div>
          
            </div>
            <div className="col-span-6 lg:mt-0 mt-6 px-2 lg:absolute lg:-top-10 lg:left-1/2">
                <img className="rounded-lg" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/10/h3-5.webp" alt="" />
            </div>
            
        </div> 


   

        <div className="lg:grid lg:grid-cols-3 lg:max-w-7xl max-w-md gap-8 py-4 lg:container lg:mx-auto">
            <WhyReasons icon={<CiBookmark/>} title="Experience and Expertise" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper."/>
            <WhyReasons icon={<BsFileBarGraph/>} title="Pathology Analysis" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper."/>
            <WhyReasons icon={<FaRegUserCircle/>} title="Customer Focused" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper."/>
            <WhyReasons icon={<PiCrownSimpleFill/>} title="Industry Certified" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper."/>
            <WhyReasons icon={<TfiMoney/>} title="Saving Costs" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper."/>
            <WhyReasons icon={<FaUmbrella/>} title="Honesty and Integrity" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper."/>

        </div>

           
    </div>
}


export const WhyReasons = ({title, des, icon} : {title : string, des : string, icon : React.ReactNode}) => {
    return <div className="w-full grid grid-cols-4 lg:mt-0 mt-6">
        <div className="col-span-1 flex-col items-start justify-center">
            <div className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center">
                <div>
                    {icon}
                </div>
            </div>
        </div>
        <div className="col-span-3">
            <p className="text-xl text-black">{title}</p>
            <p className="text-base text-slate-500 mt-4">{des}</p>
        </div>
    </div>
}
