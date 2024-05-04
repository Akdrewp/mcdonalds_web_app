import Image from "next/image";

export default function Offers() {
    return (
        <div className="h-52 mt-9 ml-5">
            <h1 className="text-xl font-extrabold mb-2">My Offers</h1>
            <div className="flex gap-2">
                <OffersImage 
                    src={"/images/offers/mcDonalds-offer-1.png"}
                    alt={"mcDonald's offer"}
                    underText="McDONALD'S IN WALMART $9.50 + tax Filet-O-Fish Extra Value Meal"
                    expires="Expires in 5 days"
                />
                <OffersImage 
                    src={"/images/offers/mcDonalds-offer-2.png"}
                    alt={"mcDonald's offer"}
                    underText="$8.50 + tax Quarter Pounder with Cheese Extra Value Meal"
                    expires="Expires in 5 days"
                />
                <OffersImage 
                    src={"/images/offers/mcDonalds-offer-3.png"}
                    alt={"mcDonald's offer"}
                    underText="Spend $10 or more pre-tax and get a Big Mac, Quarter Pounder with Cheese or McChicken FREE"
                    expires="Offer expires 05/05/2024"
                />
            </div>
        </div>
    );
}

function OffersImage({
    src,
    alt,
    underText,
    expires,
}:  {
    src: string;
    alt: string;
    underText: string;
    expires: string;
}) {
    return(
        <div className="flex flex-col max-w-[13ch] max-h-[16ch]">
            <Image
                className="rounded-md shadow-[-3px_3px_3px_0px_rgba(0,0,0,0.13)] mb-2"
                src={src}
                alt={alt}
                height={100}
                width={100}
            />
            <p className="max-w-[100px] line-clamp-2 text-[0.62rem] font-extrabold">{underText}</p>
            <p className="max-w-[100px] grow text-xs text-gray-600 leading-3 text-[0.6rem]">{expires}</p>
        </div>
    );
}