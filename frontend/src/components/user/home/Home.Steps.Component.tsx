


export const HomeStepsComponent = () => {
    return <div className="w-full">
        <div className="max-w-4xl container mx-auto">
            <div className="flex items-center justify-center">
                <img src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/08/ic2.png" alt="" />
            </div>
            <div className="flex items-center justify-center mt-4">
                <p className="text-base text-slate-400">Health Care Every Time You Need It</p>
            </div>
            <div className="flex items-center justify-center mt-4">
                <p className="text-2xl md:text-4xl font-semibold text-black">Safe In-Person & Virtual Appointments</p>
            </div>
            <div className="flex items-center justify-center mt-4">
                <p className="text-base text-slate-500 text-center">Whether you need attention for something minor or major, we’ve put in place additional protocols to make sure you feel comfortable and confident every time you seek care.
                </p>
            </div>
        </div>
        <div className="max-w-7xl container mx-auto lg:grid lg:grid-cols-3 gap-3 p-4">
            <StepsComp imgLink="https://cdn0.iconfinder.com/data/icons/striving-for-success-1/66/25-256.png" title="Get Care Virtually" description="See a health care provider without going to a doctor’s office. Our virtual visit services can treat and diagnose through online video."/>
            <StepsComp imgLink="https://cdn-icons-png.flaticon.com/128/2838/2838779.png" title="Book An Appointment" description="Make an appointment to see your doctor to find out if you have the disease and the most optimal treatment method."/>
            <StepsComp imgLink="https://cdn-icons-png.flaticon.com/128/4526/4526826.png" title="See A Doctor" description="Appointments can be scheduled by video, phone or in-person with a provider. Call your provider’s office to discuss your needs."/>
        </div>
    </div>
}

const StepsComp = ({imgLink, title, description} : {imgLink : string, title : string, description : string}) => {
    return <div className="w-full bg-white border shadow-lg rounded-xl p-8 min-h-96 mt-4 lg:mt-0">
        
            <div className="flex items-center justify-center h-16">
                <img className="w-16 h-16 bg-yellow-300 rounded-md border" src={imgLink} alt="" />
            </div>
            <div className="flex items-center justify-center text-center h-16">
                <p className="text-xl font-semibold">{title}
                </p>
            </div>
            <div className="flex items-center justify-center text-center h-16">
                <p className="text-base font-normal text-slate-500">{description}
                </p>
            </div>
            <div className="flex items-center justify-center text-center w-full h-28">
                <button className="bg-black px-8 rounded-md shadow-md py-3 text-white w-full">
                    Read More
                </button>                
            </div>
    </div>
}
