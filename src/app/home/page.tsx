import Promo from "./promo";
import Menu from "./menu";
import Offers from "./offers";
import New from "./new";
import morningPromo from "/home/akdrewpwork/repos/mcdonalds_web_app/mcdonalds_web_app/public/images/promo/mcDonalds-morning-promo-notext.png";
import RewardsMore from "./rewards";

export default function Home() {
    return (
      <div className="homepage">
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