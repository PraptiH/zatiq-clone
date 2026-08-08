export default function Shop() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-5 space-y-3 shadow-sm flex flex-col text-left">
                <p className="text-gray-800 text-xl font-semibold ">New Shop</p>
                <p className="text-2xl font-bold">1,502</p>
            </div>
            <div className="bg-white rounded-xl p-5 space-y-3 shadow-sm flex flex-col text-left">
                <p className="text-gray-800 text-xl font-semibold ">Active Shop</p>
                <p className="text-2xl font-bold">51,281</p>
            </div>
        </div>
    )
}