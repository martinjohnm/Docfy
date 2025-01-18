import { NumbersCardDash } from "./Numbers.Card.Dash"




export const Dashboard = () => {
    return <div className="w-full h-full overflow-auto bg-[#1D4A63]">
        
        <div className="md:grid md:grid-cols-3 p-4 gap-3 min-h-60">
            <NumbersCardDash title="Users" data={100}/>
            <NumbersCardDash title="Doctors" data={56}/>
            <NumbersCardDash title="Bookings" data={45}/>
            
        </div>


 
        <div className=""></div>
    </div>
}



