

export default function NavFooter() {
    return (
        <div className="grid grid-cols-5 sticky bottom-0 width-full h-20 px-8 z-[2] bg-[rgba(249,249,249,255)] border-t-[1px] border-[#d3d3d3]">
            <div className="w-[27px]">
                <p className="text-[0.6rem] font-bold">Home</p>
            </div>
            <div className="w-[27px]">
                <p className="text-[0.6rem] font-bold">Order</p>
            </div>
            <div className="w-[27px]">
                <p className="text-[0.6rem] font-bold">Rewards&Offers</p>
            </div>
            <div className="w-[27px]">
                <p className="text-[0.6rem] font-bold">Code</p>
            </div>
            <div className="w-[27px]">
                <p className="text-[0.6rem] font-bold">More</p>
            </div>
        </div>
    );
}