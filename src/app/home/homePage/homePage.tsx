import Promo from "./promo";
import RewardsMore from "./rewards";
import Menu from "./menu";
import Offers from "./offers";
import New from "./new";


export default function HomePage() {
    return (
        <div className="flex flex-col grow bg-[#f9f9f9] max-w-xl mx-auto">
            <div className="flex flex-col h-52">
                    <Promo
                        img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                        title="Welcome to McDonald's"
                        subtext="Discover our new barbecue and sweet and sour sauce"
                        alt="McDonalds promo image coffee and Mcmuffin"
                        isSmall={false}
                    />
            </div>
            <div className="flex flex-col mb-12 pt-9 bg-[#f9f9f9]">
                <RewardsMore />
                <Menu />
                <Offers />
                <New />
            </div>
        </div>
    );

}