import Promo from "./promo";
import morningPromo from "/home/akdrewpwork/repos/mcdonalds_web_app/mcdonalds_web_app/public/images/promo/mcDonalds-morning-promo-notext.png";

export default function Home() {
    return (
      <div className="homepage">
        <div className="promo-bar">
                <Promo
                    img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                    title="Welcome to McDonald's"
                    subtext="Discover some sauce we made"
                    alt="McDonalds promo image coffee and Mcmuffin"
                />
        </div>
        <div className="content">
            <div className="rewards-more-bar">
                I&apos;m a reminder more points, more rewards!
            </div>
            <div className="menu-bar">
                I&apos;m a menu!
            </div>
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
                    />
                    <Promo
                        img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                        title="Promo Title"
                        subtext="Promo subtext"
                        alt="McDonalds promo image coffee and Mcmuffin"
                    />
                    <Promo
                        img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                        title="Promo Title"
                        subtext="Promo subtext"
                        alt="McDonalds promo image coffee and Mcmuffin"
                    />
                </div>
            </div>
        </div>
      </div>
    );
}