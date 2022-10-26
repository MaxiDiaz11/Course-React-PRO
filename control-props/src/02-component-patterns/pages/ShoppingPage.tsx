import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTittle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe - Mug",
  img: "./coffee-mug.png",
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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image"></ProductImage>
          <ProductTittle className="text-tittle"></ProductTittle>
          <ProductButtons className="custom-buttons"></ProductButtons>
        </ProductCard>

        {/* Puede realizarse de ambas maneras */}

        <ProductCard product={product}>
          <ProductCard.Image className="custom-image"></ProductCard.Image>
          <ProductCard.Tittle
            tittle="Hola mundo"
            className="text-tittle"
          ></ProductCard.Tittle>
          <ProductCard.Buttons></ProductCard.Buttons>
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage></ProductImage>
          <ProductTittle
            style={{
              fontWeight: "bold",
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          ></ProductTittle>
          <ProductButtons
            style={{ display: "flex", justifyContent: "center" }}
          ></ProductButtons>
        </ProductCard>
      </div>
    </div>
  );
};
