import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const { items } = useSelector((state) => state.product);
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <ProductItem {...item} />
        </div>
      ))}
    </>
  );
};
