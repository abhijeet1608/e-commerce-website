import React, { useState } from "react";

import "../../style/style.css";

function CheckoutCard() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  return (
    <div className="checkout-card-container">
      <div className="checkout-product">
        <img
          src="https://canary.contestimg.wish.com/api/webimage/5fc8ac9781d98caccdf6b69e-large.jpg"
          alt=""
          className="product-image"
        />
        <div>
          <h4>Product Name</h4>
          <hp>Men Navy Blue Embroidered Hooded Sweatshirt</hp>
          <div className="price-div">
            <span>
              ₹ <span>1,500 </span>
            </span>
            <span className="price-mrp">
              ₹<span>1,500 </span>
            </span>
          </div>
        </div>
        <div className="quantity-div">
          <button> ++ </button>
          <span>5</span>
          <button> -- </button>
        </div>
        <button>Del</button>
      </div>
    </div>
  );
}

export default CheckoutCard;
