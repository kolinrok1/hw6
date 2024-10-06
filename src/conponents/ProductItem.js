import { useDispatch } from "react-redux";
import { removeProduct, editProduct } from "./slice/productSlice";

export const ProductItem = ({
  id,
  nameProduct,
  description,
  price,
  access,
}) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(removeProduct(id));
  };

  const editProductItem = () => {
    dispatch(editProduct(id));
  };
  return (
    <>
      <p>Нименование: {nameProduct}</p>
      <p>Описание:{description}</p>
      <p>Цена:{price}</p>
      <p>Доступ:{access ? "Недоступен" : "Доступен"}</p>
      <button onClick={editProductItem}> Редактировать</button>
      <button onClick={deleteProduct}> Удалить</button>
    </>
  );
};
