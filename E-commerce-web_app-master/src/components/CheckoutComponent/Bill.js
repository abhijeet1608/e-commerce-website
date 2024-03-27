import React from "react";

import "../../style/style.css";

function Bill() {
  return (
    <div className="bill-container">
      <h2>Bill Amount</h2>
      <div className="price-div">
        <span>
          ₹ <span>1,500 </span>
        </span>
        <span className="price-mrp">
          ₹<span>1,500 </span>
        </span>
      </div>
      <button>Buy Now</button>
    </div>
  );
}

export default Bill;
