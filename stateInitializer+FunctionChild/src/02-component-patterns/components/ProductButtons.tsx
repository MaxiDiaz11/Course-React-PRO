import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ButtonsProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  let stylesButtons: string = `${styles.buttonsContainer} ${className}`;

  return (
    <div className={stylesButtons} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        disabled={isMaxReached()}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
