import Image from 'next/image';
import { StaticImageData } from "next/image";
import { relative } from 'path';

export default function Promo({
    img,
    title,
    subtext,
}:  {
    img: string;
    title: string;
    subtext: string;
}) {
    return (
        <div className="promo-wrapper" style={{position: "relative"}}>
            <div className="promo-element">{title}</div>
            <Image
                src={img}
                alt="Landscape picture"
                style={{
                    zIndex: -1,
                }}
                fill
                quality={100}
            />
            <div>{subtext}</div>
        </div>
    );
}