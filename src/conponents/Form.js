import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./slice/productSlice";

export const Form = (params) => {
  const dispatch = useDispatch();
  const [nameProduct, setnameProduct] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState(0);
  const [access, setaccess] = useState(true);

  const handlerChengeProduct = ({ target }) => {
    setnameProduct(target.value);
    console.log(nameProduct);
  };

  const handlerChengeDiscription = ({ target }) => {
    setdescription(target.value);
    console.log(description);
  };

  const handlerChengePrice = ({ target }) => {
    setprice(parseInt(target.value));
    console.log(price);
  };

  const handlerChengeAccess = () => {
    setaccess(!access);
    console.log(access);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const objectProduct = {
      nameProduct: nameProduct,
      description: description,
      price: price,
      access: access,
    };
    dispatch(addProduct(objectProduct));
    setnameProduct("");
    setdescription("");
    setprice(0);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="Название"
        value={nameProduct}
        onChange={handlerChengeProduct}
      />
      <input
        type="text"
        placeholder="Описание"
        value={description}
        onChange={handlerChengeDiscription}
      />
      <input
        type="text"
        placeholder="Цена"
        value={price}
        onChange={handlerChengePrice}
      />
      <label>
        <input type="checkbox" value={access} onChange={handlerChengeAccess} />{" "}
        Доступ
      </label>

      <button onClick={handlerSubmit}>Добавить</button>
    </form>
  );
};
