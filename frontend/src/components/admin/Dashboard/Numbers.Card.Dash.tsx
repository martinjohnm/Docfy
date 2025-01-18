


export const NumbersCardDash = ({title, data} : {title : string, data : number}) => {
    return <div className="bg-[#263E4E] rounded-lg text-white p-4 md:mt-0 mt-4">
        <p className="font-semibold text-lg">{title}</p>
        <div>
            <p className="font-semibold text-4xl">{data}</p>
        </div>
    </div>
}