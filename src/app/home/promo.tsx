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
                <div className='ml-6 mt-4'>
                    <div className="">
                        <h1 className="text-3xl font-Inter font-bold">{title}</h1>
                    </div>
                    <div>
                        <p className='text-sm'>{subtext}</p>
                    </div>
                    <Button/>
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
            <div className='promo-footer ml-6'>
                I&apos;m the footer
            </div>
        </div>
    );
}

function Button() {
    return (
        <button type="button" className='bg-white py-0.5 px-4'>
            I&apos;m a button
        </button>
    );
}