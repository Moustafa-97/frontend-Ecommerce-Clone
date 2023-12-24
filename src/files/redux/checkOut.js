import { createSlice } from "@reduxjs/toolkit";

const checkOut = createSlice({
  name: "checkOut",
  initialState: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    cartItemQuantaty: localStorage.getItem("cart-quantaty")
      ? JSON.parse(localStorage.getItem("cart-quantaty"))
      : 0,
    finalTotalPrice: localStorage.getItem("cart-total-price")
      ? JSON.parse(localStorage.getItem("cart-total-price"))
      : 0,
  },
  reducers: {
    removeProduct: (state, action) => {
      let cartItemsIndex = state.cartItems.findIndex(
        (index) => index.id === action.payload.id
        );
        if (cartItemsIndex >= 0) {
            // item 
            state.cartItems[cartItemsIndex].quantaty -= action.payload.quantaty
            state.cartItems[cartItemsIndex].totalPrice -= action.payload.quantaty*state.cartItems[cartItemsIndex].price
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            // quantaty
            const cartItemQuantaty = action.payload.quantaty;
            state.cartItemQuantaty += cartItemQuantaty;
            localStorage.setItem(
              "cart-quantaty",
              JSON.stringify(state.cartItemQuantaty)
            );
            // Total price
            const eachItemTotalPrice = action.payload.price;
            state.finalTotalPrice += eachItemTotalPrice * cartItemQuantaty;
            localStorage.setItem(
              "cart-total-price",
              JSON.stringify(state.finalTotalPrice)
            );
          } else {
            // item
            const cartSelectedItem = { ...action.payload };
            state.cartItems.push(cartSelectedItem);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            // quantaty
            const cartItemQuantaty = action.payload.quantaty;
            state.cartItemQuantaty += cartItemQuantaty;
            localStorage.setItem(
              "cart-quantaty",
              JSON.stringify(state.cartItemQuantaty)
            );
            // Total price
            const eachItemTotalPrice = action.payload.price;
            state.finalTotalPrice += eachItemTotalPrice * cartItemQuantaty;
            localStorage.setItem(
              "cart-total-price",
              JSON.stringify(state.finalTotalPrice)
            );
          }
        
    },
    addProduct: (state, action) => {},
  },
});
export default checkOut
