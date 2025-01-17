


export const HomeWhyHealthComponent = () => {
    return <div className="w-full">
        <div className="max-w-4xl container mx-auto">
            <div className="flex items-center justify-center">
                <img src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/08/ic2.png" alt="" />
            </div>
            <div className="flex items-center justify-center mt-4">
                <p className="text-base text-slate-400">Health is Everything, Take Care of It</p>
            </div>
            <div className="flex items-center justify-center mt-4">
                <p className="text-2xl md:text-4xl font-semibold text-black">Why Should you have Regular Health Check-Ups?
                </p>
            </div>
            <div className="flex items-center justify-center mt-4">
                <p className="text-base text-slate-500 text-center">From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times.
                </p>
            </div>
        </div>
        <div className="max-w-7xl container mx-auto lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-3 p-4">
            <BenefitsComp percent={5} title="Incidence of Cancer at First Examination" description="See a health care provider without going to a doctor’s office. Our virtual visit services can treat and diagnose through online video."/>
            <BenefitsComp percent={42} title="Deaths Due to Subjective Health" description="Make an appointment to see your doctor to find out if you have the disease and the most optimal treatment method."/>
            <BenefitsComp percent={23} title="Incidence of Respiratory Diseases" description="Appointments can be scheduled by video, phone or in-person with a provider. Call your provider’s office to discuss your needs."/>
            <BenefitsComp percent={18} title="Children With Congenital Diseases" description="Appointments can be scheduled by video, phone or in-person with a provider. Call your provider’s office to discuss your needs."/>

        </div>
    </div>
}

const BenefitsComp = ({percent, title, description} : {percent : number, title : string, description : string}) => {
    return <div className="w-full bg-[#fceaed] border shadow-inner rounded-xl p-8 mt-4 lg:mt-0">
        
      
            <div className="flex items-center justify-center text-center h-16 text-[#e4354a]">
                <p className="text-5xl font-semibold">{percent} %
                </p>
            </div>
            <div className="flex items-center justify-center text-center py-2">
                <p className="text-lg font-semibold text-black">{title}
                </p>
            </div>

            <hr className="" />

           <div className="flex items-center justify-center text-center mt-4">
                <p className="text-base font-normal text-black">{description}
                </p>
            </div>
    </div>
}
