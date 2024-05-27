export default function McDonaldsCodeLogo({
    className,
    isSelected,
} : {
    className: string,
    isSelected: boolean,
}) {
    return (
        <img src={isSelected ? "/images/nav/CodeSelectedPNG.png" : "/images/nav/CodeUnselectedPNG.png"} alt={"Reqards and Offers"}
            className="h-[27px] w-[19px] pb-[0.43rem]" />
    )
}