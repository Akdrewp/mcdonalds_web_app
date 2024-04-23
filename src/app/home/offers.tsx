import Image from "next/image";

export default function Offers() {
    return (
        <div className="offers-bar overflow-hidden h-52 mt-10 ml-3 pl-1">
            <h1>My Offers</h1>
            <div className="flex max-h-full">
                <OffersImage 
                    src={"/images/promo/offers/mcDonalds-offer-1.png"}
                    alt={"mcDonald's offer"}
                    underText="McDONALDS'S IN WALMART $9.50 + tax Filet-O-Fish Extra Value Meal"
                    expires="Expires in 5 days"
                />
                <OffersImage 
                    src={"/images/promo/offers/mcDonalds-offer-2.png"}
                    alt={"mcDonald's offer"}
                    underText="$8.50 + tax Quarter Pounder with Cheese Extra Value Meal"
                    expires="Expires in 5 days"
                />
                <OffersImage 
                    src={"/images/promo/offers/mcDonalds-offer-3.png"}
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
        <div className="flex flex-col max-w-[13ch]">
            <Image
                className="self-center rounded-md shadow-[-3px_3px_3px_0px_rgba(0,0,0,0.13)]"
                src={src}
                alt={alt}
                height={100}
                width={100}
            />
            <p className="overflow-hidden text-ellipsis text-xs">{underText}</p>
            <p>{expires}</p>
        </div>
    );
}