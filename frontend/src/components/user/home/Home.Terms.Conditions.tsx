


export const HomeTermsCondition = () => {
    return <div className="w-full text-slate-500 max-w-7xl container mx-auto p-4">
        <div className="grid grid-cols-2">
            <div>
                <p>This is a sample website by <span className="font-bold">Martin John M</span> © 2024 – All Rights Reserved</p>
            </div>
            <div className="justify-center items-center flex">
                <div className="flex gap-4">
                    <div className="hover:underline cursor-pointer">
                        <p>Sitemap</p>
                    </div>
                    <div className="hover:underline cursor-pointer">
                        <p>Terms and conditions</p>
                    </div> 
                    <div className="hover:underline cursor-pointer">
                        <p>Privacy policy</p>
                    </div> 
                    <div className="hover:underline cursor-pointer">
                        <p>Manage Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}