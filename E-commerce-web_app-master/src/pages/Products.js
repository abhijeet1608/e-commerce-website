import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";

import ".././style/style.css";
import Filter from "../components/Filter/Filter";

function Products() {
  return (
    <>
      <div>
        <div className="filter-container">
          <Filter />
        </div>
        <div className="productContainer">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default Products;
