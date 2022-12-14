import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTittle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div>
        <ProductCard
          product={product}
          className="bg-dark text-white"
          key={product.id}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {() => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10 px 10px 10px rgba(0,0,0,0.2)" }}
              ></ProductImage>
              <ProductTittle className="text-tittle"></ProductTittle>
              <ProductButtons className="custom-buttons"></ProductButtons>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
