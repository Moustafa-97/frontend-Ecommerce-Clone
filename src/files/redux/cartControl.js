import { createSlice } from "@reduxjs/toolkit";

const cartControl = createSlice({
  name: "cart",
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
    addToCart: (state, action) => {
      let cartItemsIndex = state.cartItems.findIndex(
        (index) => index.id === action.payload.id
      );
      if (cartItemsIndex >= 0) {
        // item
        state.cartItems[cartItemsIndex].quantaty += action.payload.quantaty;
        state.cartItems[cartItemsIndex].totalPrice +=
          action.payload.quantaty * state.cartItems[cartItemsIndex].price;
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
    decreaseCartItems: (state, action) => {
      let cartItemsIndex = state.cartItems.findIndex(
        (index) => index.id === action.payload.id
      );
      // item
      if (state.cartItems[cartItemsIndex].quantaty > 1) {
        state.cartItems[cartItemsIndex].quantaty -= 1;
        state.cartItems[cartItemsIndex].totalPrice =
          state.cartItems[cartItemsIndex].quantaty *
          state.cartItems[cartItemsIndex].price;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        // quantaty
        state.cartItemQuantaty -= 1;
        localStorage.setItem(
          "cart-quantaty",
          JSON.stringify(state.cartItemQuantaty)
        );
        // Total price
        state.finalTotalPrice -= state.cartItems[cartItemsIndex].price;
        localStorage.setItem(
          "cart-total-price",
          JSON.stringify(state.finalTotalPrice)
        );
      } else if (state.cartItems[cartItemsIndex].quantaty === 1) {
        //Total price
        state.finalTotalPrice -= state.cartItems[cartItemsIndex].price;
        localStorage.setItem(
          "cart-total-price",
          JSON.stringify(state.finalTotalPrice)
        );
        //items
        let filteredItem = state.cartItems?.filter(
          (remove) => remove.id !== action.payload.id
        );
        state.cartItems = filteredItem;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        // quantaty
        state.cartItemQuantaty -= 1;
        localStorage.setItem(
          "cart-quantaty",
          JSON.stringify(state.cartItemQuantaty)
        );
      }
    },
    increaseCartItem: (state, action) => {
      let cartItemsIndex = state.cartItems.findIndex(
        (index) => index.id === action.payload.id
      );
      // item
      if (state.cartItems[cartItemsIndex].quantaty < 10) {
        state.cartItems[cartItemsIndex].quantaty += 1;
        state.cartItems[cartItemsIndex].totalPrice =
          state.cartItems[cartItemsIndex].quantaty *
          state.cartItems[cartItemsIndex].price;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        // quantaty
        state.cartItemQuantaty += 1;
        localStorage.setItem(
          "cart-quantaty",
          JSON.stringify(state.cartItemQuantaty)
        );
        // Total price
        state.finalTotalPrice += state.cartItems[cartItemsIndex].price;
        localStorage.setItem(
          "cart-total-price",
          JSON.stringify(state.finalTotalPrice)
        );
      } else if (state.cartItems[cartItemsIndex].quantaty === 10) {
        alert("max");
      }
    },
    removeCartItem: (state, action) => {
      let cartItemsIndex = state.cartItems.findIndex(
        (index) => index.id === action.payload.id
      );
      let filteredItem = state.cartItems?.filter(
        (remove) => remove.id !== action.payload.id
      );
      // total price
      state.finalTotalPrice -= state.cartItems[cartItemsIndex].totalPrice;
      localStorage.setItem(
        "cart-total-price",
        JSON.stringify(state.finalTotalPrice)
      );
      // quantaty
      state.cartItemQuantaty -= state.cartItems[cartItemsIndex].quantaty;
      localStorage.setItem(
        "cart-quantaty",
        JSON.stringify(state.cartItemQuantaty)
      );
      //items
      state.cartItems = filteredItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      // total price
      state.finalTotalPrice = 0;
      localStorage.setItem(
        "cart-total-price",
        JSON.stringify(state.finalTotalPrice)
      );
      // quantaty
      state.cartItemQuantaty = 0;
      localStorage.setItem(
        "cart-quantaty",
        JSON.stringify(state.cartItemQuantaty)
      );
      //items
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});
export const {
  addToCart,
  decreaseCartItems,
  increaseCartItem,
  removeCartItem,
  clearCart,
} = cartControl.actions;
export default cartControl.reducer;
