import SearchLogo from "../../../public/images/order/magnifying-glass-svgrepo-com";

export default function TopOrder() {

    return (
    <div className="flex flex-col sticky top-0 h-[13.5rem] w-full pt-14 pl-6 bg-[rgba(249,249,249,255)] border-b-[1px] border-[#d3d3d3] z-[3]">
        <div className="flex justify-between">
            <h1 className="text-[1.75rem] font-extrabold">Order</h1>
            <div className="flex pt-3">
                <SearchLogo />
                <p className="text-[0.8rem] pl-6 font-[900] mr-5 mb-2">1036 pts</p>
            </div>
        </div>
        <label className="self-start border border-[#959595] flex rounded-2xl 
            overflow-hidden text-[0.67rem] mt-5"
        >
            <input type="checkbox" value="" className="sr-only peer" />
            <h1 className="py-[0.2rem] pl-4 overflow-hidden
                mr-1
                peer-checked:bg-[#ffbc0d] 
                peer-checked:font-bold 
                peer-checked:mr-1 
                peer-checked:pr-4
                peer-checked:rounded-[0.7rem]"
            >Pickup</h1>
            <h1 className="py-[0.2rem] pr-2 overflow-hidden
                bg-[#ffbc0d] peer-checked:bg-inherit
                font-bold peer-checked:font-normal
                ml-1 peer-checked:ml-0
                pl-3 peer-checked:pl-0
                rounded-[0.7rem] peer-checked:rounded-none"
            >McDelivery</h1>
        </label>
    </div>
    );
}