import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addTocart: (state, action) => {
      state.cart.push(action.payload); // Mutate the state in place
    },
    removeToCart: (state, action) => {
      const idToRemove = action.payload;
      const indexToRemove = state.cart.findIndex(
        (item) => item.item.id === idToRemove
      );
      if (indexToRemove !== -1) {
        state.cart.splice(indexToRemove, 1); // Remove only the first occurrence
      }
    },
    logedOutToCart: (state) => {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
