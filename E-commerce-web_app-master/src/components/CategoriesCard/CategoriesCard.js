import React from "react";
import { Card, CardDeck } from "react-bootstrap";

import "../../style/style.css";

function Categories() {
  return (
    <CardDeck className="categories-list">
      <Card>
        <Card.Img
          variant="top"
          src="https://canary.contestimg.wish.com/api/webimage/5a3877335983513f6d914ad8-large.jpg?cache_buster=7815954b4b859fff0ceaafadbce3a2e7"
        />
        <Card.Body>
          <Card.Title>
            Bags <span className="discount-text"> (20% Discount)</span>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJzT0oMvvsgLOMcfskFkr8HuYPChW2PXj_kvYyNZLbBiAqNu5VTbPXJEyg_JefIPSglhEk-LdxBdbGqwQpMw3TS604Xfu8&usqp=CAE"
        />
        <Card.Body>
          <Card.Title>Hoodies</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.shopify.com/s/files/1/0556/4009/6958/products/Drak-grey_900x.jpg"
        />
        <Card.Body>
          <Card.Title>
            T-Shirts<span className="discount-text"> (Big sale offer)</span>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://oxygendigitalshop.com/media/cache/1920x0/catalog/category/ios13-4-ipad-pro-4gen-12-9-in_1622666076.webp"
        />
        <Card.Body>
          <Card.Title>Accessories</Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default Categories;
