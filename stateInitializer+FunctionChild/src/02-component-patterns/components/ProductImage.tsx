import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({
  img = "",
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;
  let stylesProduct: string = `${styles.productImg} ${className}`;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      src={imgToShow}
      alt="Product"
      className={stylesProduct}
      style={style}
    />
  );
};
