import Image from "next/image";

export default function RewardsMore() {
    return (
        <div className="flex mx-6 h-24 border rounded-md overflow-hidden shadow-[-2px_1px_1px_0px_rgba(0,0,0,0.04)]">
            <div className="rewards-gradient w-4" />
            <Image
                    className="self-center"
                    src={"/images/promo/mcDonalds-rewards-coins.png"}
                    alt={"Coins"}
                    height={33}
                    width={33}
                    quality={100}
            />
            <div className="flex flex-col grow pl-2 justify-center">
                <h1 className="font-bold text-[0.8rem] mb-1">More Points, More Rewards</h1>
                <p className="leading-4 text-[0.78rem] font-medium">Check out what bonus points are available to get you to more FREE rewards even faster!</p>
            </div>
            <div className="flex items-center pl-1 pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="#404040" className="w-5 h-5">
                    <path strokeLinecap="butt" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    )
}

function arrow() {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

}