import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [],
    number: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist")).length
      : 0,
  },
  reducers: {
    AddRemoveProduct: (state, action) => {
      let productIndex = state.products.findIndex(
        (i) => i.wishProducts.id === action.payload.wishProducts.id
      );

      if (productIndex >= 0) {
        let filteredItem = state.products?.filter(
          (remove) => remove.wishProducts.id !== action.payload.wishProducts.id
        );
        state.products = filteredItem;
        localStorage.setItem("wishlist", JSON.stringify(state.products));
        state.number = JSON.parse(localStorage.getItem("wishlist")).length;
      } else {
        const newItem = { ...action.payload };
        state.products.push(newItem);
        localStorage.setItem("wishlist", JSON.stringify(state.products));
        state.number = JSON.parse(localStorage.getItem("wishlist")).length;
      }
    },

    removeProduct: (state, action) => {
      let filteredItem = state.products.filter(
        (prod) =>
          prod.wishProducts.id !== action.payload.wishProducts.wishProducts.id
      );
      state.products = filteredItem;
      localStorage.setItem("wishlist", JSON.stringify(state.products));
      state.number = JSON.parse(localStorage.getItem("wishlist")).length;
    },
  },
});
export const { AddRemoveProduct, removeProduct } = wishSlice.actions;
export default wishSlice.reducer;
