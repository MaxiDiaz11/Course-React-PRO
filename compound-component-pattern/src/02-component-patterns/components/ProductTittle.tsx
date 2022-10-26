import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface TittleProps {
  className?: string;
  tittle?: string;
  style?: React.CSSProperties;
}

export const ProductTittle = ({ tittle, className, style }: TittleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescrition} ${className}`} style={style}>
      {tittle ? tittle : product.title}
    </span>
  );
};
