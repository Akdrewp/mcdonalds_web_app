'use client'

import addPoints from "@/firebase/firestore/addPointsToUser";

function orderHamburger() {
    console.log("Hamburger ordered");
    addPoints(1);
}

export default function OrderMenu() {
    return (
        <button onClick={orderHamburger}>
                Order Hamburger
        </button>
    )
}