import React from "react";
import { ProductCard } from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffe - Mug",
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}></ProductCard>
      </div>
    </div>
  );
};
