'use client'

import TopOrder from "./top-order";

function orderHamburger() {
    console.log("Hamburger ordered");
}

export default function Order() {

    return(
        <div className="grow">
            <button onClick={orderHamburger}>
                Order Hamburger
            </button>
        </div>
    );
}