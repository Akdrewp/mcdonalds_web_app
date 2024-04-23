import Image from "next/image"

export default function Menu() {
    return (
        <div className="menu-bar mb-3.5">
            <h1>Menu</h1>
            <Image
                className="self-center"
                src={"/images/promo/mcDonalds-BigMac-Menu-Icon.png"}
                alt={"Big Mac"}
                height={470/3}
                width={470/3}
                quality={100}
            />
        </div>
    );
}