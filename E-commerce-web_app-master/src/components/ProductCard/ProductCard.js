import React from "react";
import { Button, Card } from "react-bootstrap";

import "../../style/style.css";

function ProductCard() {
  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src="https://canary.contestimg.wish.com/api/webimage/5fc8ac9781d98caccdf6b69e-large.jpg"
          loading="slow"
          alt="naruto"
        />
        <Card.Body>
          <Card.Title className="product-title">Tommy Hilfiger</Card.Title>
          <p className="product-sub-title">
            Men Navy Blue Embroidered Hooded Sweatshirt
          </p>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <div className="price-div">
              <span>
                ₹ <span>1,500 </span>
              </span>
              <span className="price-mrp">
                ₹<span>1,500 </span>
              </span>
            </div>
            <div className="tag-container">
              <p className="tag">Fast Delivery</p>
              <p className="tag">4 days delivery</p>
            </div>
          </Card.Subtitle>
          <Button size="sm" variant="danger">
            Remove from Cart
          </Button>
          <Button variant="secondary" size="sm">
            Out of Stock
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
