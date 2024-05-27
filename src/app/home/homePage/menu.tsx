export default function Menu() {
    return (
        <div className="h-52 overflow-hidden mt-9 mb-8 ml-4">
            <div className="flex mb-3">
                <h1 className="grow ml-2 text-xl font-extrabold speedee">Menu</h1>
                <div className="flex items-center text-[#3377c2] mr-4">
                    <p className="text-xs font-extrabold mr-2 ">Full menu</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-[0.6rem] h-6">
                        <path strokeLinecap="square" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
            <div className="flex gap-2 pl-1"> 
                <MenuImage 
                    src={"/images/menu/mcDonalds-BigMac-menu-icon.png"}
                    alt={"Big Mac"}
                />
                <MenuImage
                    src={"/images/menu/mcDonalds-mcChicken-Menu-Icon.png"}
                    alt={"mcChicken"}
                />
                <MenuImage
                    src={"/images/menu/mcDonalds-wraps-menu-icon.png"}
                    alt={"Wraps"}
                />
                <MenuImage
                    src={"/images/menu/mcDonalds-drinks-menu-icon.png"}
                    alt={"Drinks"}
                />
            </div>
        </div>
    );
}

function MenuImage({
    src,
    alt,
}:  {
    src: string;
    alt: string;
}) {
    return(
        <img src={src} alt={alt} 
            className={"self-center rounded-md shadow-[-3px_3px_3px_0px_rgba(0,0,0,0.13)] h-[157px] w-[157px]"} />
    );
}