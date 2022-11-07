import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTittle,
} from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe - Mug",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "CoffeMug - Meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = () => {
    console.log("onProductCountChange");
  };

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
        {products.map((p) => (
          <ProductCard
            product={p}
            className="bg-dark text-white"
            key={p.id}
            onChange={() => onProductCountChange()}
          >
            <ProductImage className="custom-image"></ProductImage>
            <ProductTittle className="text-tittle"></ProductTittle>
            <ProductButtons className="custom-buttons"></ProductButtons>
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image"></ProductImage>
          <ProductButtons className="custom-buttons"></ProductButtons>
        </ProductCard>
      </div>
    </div>
  );
};
