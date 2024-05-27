export default function McDonaldsOffersLogo({
    className,
    isSelected,
} : {
    className: string,
    isSelected: boolean,
}) {
    return (
        <img src={isSelected ? "/images/nav/RewardsAndOffersSelectedPNG.png" :"/images/nav/RewardsAndOffersUnselectedPNG.png"} alt={"Rewards and Offers"}
            className="h-[25px] w-[30px] pb-[0.43rem]" />
    )
}