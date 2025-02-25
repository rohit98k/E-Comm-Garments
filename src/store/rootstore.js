import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductsStore";
import cartSlice from "./cartStore";

const rootStore = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default rootStore;
