import Promo from "./promo";

export default function New() {
    return (
        <div className="flex flex-col h-[39rem] mx-5 mt-2 pt-1">
            <h1 className="text-xl font-extrabold mb-4">{"What's new"}</h1>
            <div className="flex flex-col gap-4 grow">
                <Promo
                    img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                    title="Embrace the morning"
                    subtext="With a McMuffin and Premium Roast Coffee"
                    alt="McDonalds promo image coffee and Mcmuffin"
                    isSmall={true}
                />
                <Promo
                    img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                    title="Golden AM Crunch"
                    subtext="Add a Hash Brown to your McDonald's breakfast"
                    alt="McDonalds promo image coffee and Mcmuffin"
                    isSmall={true}
                />
                <Promo
                    img="/images/promo/mcDonalds-morning-promo-notext-upscaled-1.png"
                    title="The Breakfast Burrito"
                    subtext="Like a warm hug on a cold day"
                    alt="McDonalds promo image coffee and Mcmuffin"
                    isSmall={true}
                />
            </div>
        </div>
    );
}