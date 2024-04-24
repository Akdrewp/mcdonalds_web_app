import Image from "next/image";


export default function Top() {
    return (
    <div className="flex items-end justify-center sticky top-0 h-20 w-full bg-[rgba(249,249,249,255)] border-b-[1px] border-[#d3d3d3] z-[3]">
                <Image
                        src="/images/nav/mcDonalds-nav-logo.png"
                        alt={"Rewards logo"}
                        width={150/3}
                        height={70/3}
                        style={{
                            paddingBottom: "0.4rem"
                        }}
                />
                <p className="absolute right-0 text-[0.8rem] font-[900] mr-5 mb-2">1036 pts</p>
    </div>
    );
}