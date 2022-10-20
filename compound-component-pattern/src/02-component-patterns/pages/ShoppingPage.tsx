import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTittle,
} from "../components";

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
        <ProductCard product={product}>
          <ProductImage></ProductImage>
          <ProductTittle></ProductTittle>
          <ProductButtons></ProductButtons>
        </ProductCard>

        {/* Puede realizarse de ambas maneras */}

        <ProductCard product={product}>
          <ProductCard.Image></ProductCard.Image>
          <ProductCard.Tittle tittle="Hola mundo"></ProductCard.Tittle>
          <ProductCard.Buttons></ProductCard.Buttons>
        </ProductCard>
      </div>
    </div>
  );
};
