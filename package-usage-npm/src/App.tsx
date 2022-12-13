import "./App.css";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "md-product-card";

function App() {
  const product = {
    id: "1",
    title: "Coffe Mug - Card",
    // img: "./coffe-mug.png",
  };
  return (
    <div className="App App-header">
      <h1>Hola mundo</h1>
      <ProductCard
        product={product}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            <hr />
            {count}
            <hr />
            <button onClick={reset}>Reset</button>
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
