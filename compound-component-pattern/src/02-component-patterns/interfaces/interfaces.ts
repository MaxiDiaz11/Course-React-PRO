import { Props as ProductCardProps } from "../components/ProductCard";
import { ButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { TittleProps } from "../components/ProductTittle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Tittle: (Props: TittleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ButtonsProps) => JSX.Element;
}
