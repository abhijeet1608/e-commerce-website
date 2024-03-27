import React from "react";
import Bill from "../components/CheckoutComponent/Bill";
import CheckoutCard from "../components/CheckoutComponent/CheckoutCard";

function Checkout() {
  return (
    <div className="checkout-container">
      <div className="checkout-list-div">
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
      </div>
      <div>
        <Bill />
      </div>
    </div>
  );
}

export default Checkout;
