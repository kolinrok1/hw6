import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        nameProduct: action.payload.nameProduct,
        description: action.payload.description,
        price: action.payload.price,
        access: action.payload.access,
      };
      state.items.push(newProduct);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
      console.log(state.items);
    },
    editProduct: (state, action) => {
      const iii = state.items.filter((item) => {
        return item.id === action.payload;
      });
      console.log(iii[0]);
    },
  },
});

export const { addProduct, removeProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
