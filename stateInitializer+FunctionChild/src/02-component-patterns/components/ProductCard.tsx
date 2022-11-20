import { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: () => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children()}
      </div>
    </Provider>
  );
};
