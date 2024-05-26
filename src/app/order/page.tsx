
import TopOrder from "./top-order";
import OrderMenu from "./orderMenu";

function orderHamburger() {
    console.log("Hamburger ordered");
}

export default function Order() {

    return(
        <div className="grow">
            <OrderMenu/>
        </div>
    );
}