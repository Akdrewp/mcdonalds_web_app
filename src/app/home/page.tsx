import Promo from "./promo";
import Menu from "./menu";
import morningPromo from "/home/akdrewpwork/repos/mcdonalds_web_app/mcdonalds_web_app/public/images/promo/mcDonalds-morning-promo-notext.png";
import RewardsMore from "./rewards";

export default function Home() {
    return (
      <div className="homepage">
        <div className="promo-bar">
                <Promo
                    img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                    title="Welcome to McDonald's"
                    subtext="Discover our new barbecue and sweet and sour sauce"
                    alt="McDonalds promo image coffee and Mcmuffin"
                    isSmall={false}
                />
        </div>
        <div className="content pt-9">
            <RewardsMore />
            <Menu />
            <div className="offers-bar">
                I&apos;m the offers!
            </div>
            <div className="new-bar">
                I&apos;m what&apos;s new!
                <div className="new-bar-promos">
                    <Promo
                        img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                        title="Promo Title"
                        subtext="Promo subtext"
                        alt="McDonalds promo image coffee and Mcmuffin"
                        isSmall={true}
                    />
                    <Promo
                        img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                        title="Promo Title"
                        subtext="Promo subtext"
                        alt="McDonalds promo image coffee and Mcmuffin"
                        isSmall={true}
                    />
                    <Promo
                        img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                        title="Promo Title"
                        subtext="Promo subtext"
                        alt="McDonalds promo image coffee and Mcmuffin"
                        isSmall={true}
                    />
                </div>
            </div>
        </div>
      </div>
    );
}