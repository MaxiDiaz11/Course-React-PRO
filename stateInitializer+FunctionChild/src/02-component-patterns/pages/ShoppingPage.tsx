import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTittle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

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
