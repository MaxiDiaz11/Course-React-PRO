import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTittle } from "./ProductTittle";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductTittle } from "./ProductTittle";
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Tittle: ProductTittle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
