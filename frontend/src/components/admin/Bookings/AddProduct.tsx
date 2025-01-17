


export const AddProduct = () => {
    return <div className="w-full h-full p-4 bg-white rounded-lg">
        <div>
            <p className="text-xl">Add New Problem</p>
        </div>
        <div className="mt-4">
            <p className="text-base">Problem Name</p>
            <input className="border border-black outline-none px-4 py-2 w-full rounded-md" type="text" />
        </div>

        <div className="mt-4">
            <p className="text-base">Problem statement</p>
            <textarea className="border border-black w-full min-h-60 px-4 py-2 outline-none rounded-md" name="" id=""></textarea>
        </div>
    </div>
}