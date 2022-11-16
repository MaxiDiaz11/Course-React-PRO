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

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
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
            onChange={onProductCountChange}
            value={shoppingCart[p.id]?.count || 0}
          >
            <ProductImage className="custom-image"></ProductImage>
            <ProductTittle className="text-tittle"></ProductTittle>
            <ProductButtons className="custom-buttons"></ProductButtons>
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, productInCart]) => (
          <ProductCard
            key={key}
            product={productInCart}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={productInCart.count}
          >
            <ProductImage className="custom-image"></ProductImage>
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            ></ProductButtons>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
