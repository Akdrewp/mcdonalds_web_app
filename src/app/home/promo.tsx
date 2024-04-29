import Image from 'next/image';
import { StaticImageData } from "next/image";
import { relative } from 'path';

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
        <div className="promo-wrapper">
            <div className="grow" style={{position: "relative"}}>
                <div className='relative left-[5%] top-[12%] h-full w-1/2'>
                    <div className="">
                        <h1 className={"font-Inter font-[730] pb-1" + (isSmall ? " text-xl leading-5" : " leading-7 text-3xl")}>{title}</h1>
                    </div>
                    <div>
                        <p className={'text-xs leading-3 pb-2' + (isSmall ? " h-[5ch]" : "") }>{subtext}</p>
                    </div>
                    <PromoButton/>
                </div>
                <Image
                    src={img}
                    alt={alt}
                    style={{
                        zIndex: -1,
                    }}
                    fill
                    quality={100}
                />
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