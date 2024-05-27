export default function Promo({
    img,
    title,
    subtext,
    alt,
    isSmall,
}:  {
    img: string;
    title: string;
    subtext: string;
    alt: string;
    isSmall: boolean;
}) {
    return (
        <div className="promo-wrapper grow z-[1] flex flex-col rounded-lg">
            <div className="grow" style={{position: "relative"}}>
                <div className='relative left-[5%] top-[12%] h-full w-1/2'>
                    <div className="">
                        <h1 className={"font-[730] pb-1" + (isSmall ? " text-xl leading-5" : " leading-7 text-3xl")}>{title}</h1>
                    </div>
                    <div>
                        <p className={'text-xs leading-3 pb-2' + (isSmall ? " h-[5ch]" : "") }>{subtext}</p>
                    </div>
                    <PromoButton/>
                </div>
                <img src={img} alt={alt} className="z-[-1] h-full w-full absolute inset-0 text-transparent"/>
            </div>
            {<div className={`relative promo-footer text-[0.533rem] leading-[0.6rem] w-[90%]
                 ${(isSmall ? "text-black leading-3 mt-1" : "text-gray-600 left-[5%] mt-[0.35rem]")}`}>
                For a limited time only. At participating McDonald’s restaurants in Canada. Product availability varies by restaurant.
            </div>}
        </div>
    );
}

function PromoButton() {
    return (
        <button type="button" className='bg-white py-2.5 px-11 rounded-sm text-sm'>
            Order Now
        </button>
    );
}