'use client'

import { FC, SVGProps } from "react";
import { usePathname } from "next/navigation";
import McDonaldsHomeLogo from "./footerLogos/mcDonalds-nav-home-logo";
import McDonaldsOrderLogo from "./footerLogos/mcDonalds-nav-order-logo";
import McDonaldsOffersLogo from "./footerLogos/mcDonalds-nav-offers-logo";
import McDonaldsCodeLogo from "./footerLogos/mcDonalds-nav-code-logo";
import McDonaldsMoreLogo from "./footerLogos/mcDonalds-nav-more-logo";

export default function NavFooter() {

    const pathname = usePathname();

    return (
        <div className={[
            "grid grid-cols-5 justify-items-center items-end",
            "sticky bottom-0",
            "width-full h-[5.5rem] z-[2]",
            "px-1 pb-8",
            "bg-[rgba(249,249,249,255)] border-t-[1px] border-[#d3d3d3]"
            ].join(" ")}>
            <NavElement
                className="asd"
                title="Home"
                isSelected={pathname == "/home"}
            />
            <NavElement
                className="asd"
                title="Order"
                isSelected={pathname == "/order"}
            />
            <NavElement
                className="asd"
                title="Rewards&Offers"
                isSelected={pathname == "/offers"}
            />
            <NavElement
                className="asd"
                title="Code"
                isSelected={pathname == "/code"}
            />
            <NavElement
                className="asd"
                title="More"
                isSelected={pathname == "/more"}
            />
        </div>
    );
}

function NavElement({
        className,
        title,
        isSelected,
    } : {
        className: string,
        title: string,
        isSelected: boolean,
}) {

    let NavImage: JSX.Element;
    let link: string;

    switch(title) {
        case "Home":
            NavImage = McDonaldsHomeLogo({className: className, isSelected: isSelected});
            link = "/home";
            break;
        case "Order":
            NavImage = McDonaldsOrderLogo({className: className, isSelected: isSelected});
            link = "/order";
            break;
        case "Rewards&Offers":
            NavImage = McDonaldsOffersLogo({className: className, isSelected: isSelected});
            link = "/offers";
            break;
        case "Code":
            NavImage = McDonaldsCodeLogo({className: className, isSelected: isSelected});
            link = "/code"
            break;
        case "More":
            NavImage = McDonaldsMoreLogo({className: className, isSelected: isSelected});
            link = "/more"
            break;
        
        default:
            link="/error"
            NavImage = (<div>MISSING IMAGE</div>);
    }

    return (
        <a href={link}>
            <div className="flex flex-col items-center w-[27px]">
                {NavImage}
                <p className={"text-center text-[0.56rem]" + (isSelected ? " text-black font-extrabold" : " text-[#676767] font-medium")}>{title}</p>
            </div>
        </a>
    );
}