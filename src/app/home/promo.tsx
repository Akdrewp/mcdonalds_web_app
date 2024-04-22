import Image from 'next/image';
import { StaticImageData } from "next/image";
import { relative } from 'path';

export default function Promo({
    img,
    title,
    subtext,
    alt,
}:  {
    img: string;
    title: string;
    subtext: string;
    alt: string
}) {
    return (
        <div className="promo-wrapper">
            <div className="promo-main" style={{position: "relative"}}>
                <div className='relative left-[5%] top-[12%] h-full w-1/2'>
                    <div className="">
                        <h1 className="leading-7 text-3xl font-Inter font-[730] pb-1">{title}</h1>
                    </div>
                    <div>
                        <p className='leading-4 text-xs pb-2'>{subtext}</p>
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
            <div className='promo-footer ml-6 text-xs'>
            * For a limited time only. At participating McDonald’s restaurants in Canada. Product availability varies by restaurant.
            </div>
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