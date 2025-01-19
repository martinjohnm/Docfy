import { NotFoundComponent } from "../components/NotFoundComponent"
import { FullNavBarCommon } from "../components/user/FullNavbarCommon"


export const NotFoundPage = () => {
 
    return <div className="p-2">
    
        <div className="sticky top-0 z-40">
            <FullNavBarCommon page="none"/>
        </div>
        <div className="py-4">
            <NotFoundComponent/>
        </div>

    </div>
}