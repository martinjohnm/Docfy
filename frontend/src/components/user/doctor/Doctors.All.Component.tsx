



export const DoctorsAllComponent = () => {
    return <div className="w-full">
    <div className="max-w-4xl container mx-auto">
        <div className="flex items-center justify-center">
            <img src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/08/ic2.png" alt="" />
        </div>
        <div className="flex items-center justify-center mt-4">
            <p className="text-base text-slate-400">People who are Always Dedicated to your Health</p>
        </div>
        <div className="flex items-center justify-center mt-4">
            <p className="text-2xl md:text-4xl font-medium text-black">Meet Our Doctors Medicross</p>
        </div>
        <div className="flex items-center justify-center mt-4">
            <p className="text-base text-slate-500 text-center">From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times.
            </p>
        </div>
    </div>
    <div className="max-w-7xl container mx-auto justify-center lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 gap-3 p-4">
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
        <DoctorProfileDiv img="https://demo.casethemes.net/medicross/wp-content/uploads/2024/09/dt2.webp" name="Dr Julia stuard" dept="Endocrinologist"/>
    </div>
</div>
}

const DoctorProfileDiv = ({img, name, dept} : {img : string, name : string, dept : string}) => {
    return <div className="flex justify-center items-center">
        <div>
            <div className="">
                <img className="rounded-3xl" src={img} alt="" />
            </div>
            <div className="flex justify-center items-center w-full py-2">
                <div>
                    <p className="text-xl font-medium">{name}</p>
                    <p>{dept}</p>
                </div>
            </div>
        </div>
    </div>
}