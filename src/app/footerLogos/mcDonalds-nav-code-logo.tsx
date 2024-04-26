import Image from "next/image";

export default function McDonaldsCodeLogo({
    className,
    isSelected,
} : {
    className: string,
    isSelected: boolean,
}) {
    return (
        <Image
            src={isSelected ? "/images/nav/CodeSelectedPNG.png" : "/images/nav/CodeUnselectedPNG.png"}
            alt={"Reqards and Offers"}
            height={20}
            width={20}
            style={{
                paddingBottom: "0.43rem"
            }}
        />
    )
}