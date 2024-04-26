import Image from "next/image";

export default function McDonaldsOffersLogo({
    className,
    isSelected,
} : {
    className: string,
    isSelected: boolean,
}) {
    return (
        <Image
            src={isSelected ? "/images/nav/RewardsAndOffersSelectedPNG.png" :"/images/nav/RewardsAndOffersUnselectedPNG.png"}
            alt={"Reqards and Offers"}
            height={25}
            width={30}
            style={{
                paddingBottom: "0.43rem"
            }}
        />
    )
}