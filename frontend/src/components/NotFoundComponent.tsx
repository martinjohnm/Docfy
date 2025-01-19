import { Link } from "react-router-dom"


export const NotFoundComponent = () => {
    return <div className="rounded-md w-full">
        <div className="max-w-7xl container mx-auto min-h-96 w-full flex justify-center items-center">
            <div className="w-full h-full text-center">
            <p className="text-7xl">Oops!</p>
            <p className="text-4xl font-bold mt-4">404-Page not found</p>
            <p className="text-xl mt-4">The page you are looking for might have been removed had its name changed or it is temporary unavailable.</p>
            <Link to={"/"}>
                <button className="bg-blue-700 p-4 mt-4 text-white font-bold rounded-lg hover:bg-blue-900">Go to home</button>
            </Link>
            </div>
        </div>
    </div>
}
