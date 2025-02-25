import { createSlice } from "@reduxjs/toolkit";
import all_Products from "../Component/Assets/all_product";
const productSlice = createSlice({
  name: "product",
  initialState: { products: all_Products },
  reducers: {},
});

export const productActions = productSlice.actions;

export default productSlice;
