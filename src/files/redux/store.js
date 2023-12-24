import { configureStore } from "@reduxjs/toolkit";
import countRed from "./countRed";
import cartControl from "./cartControl";
import checkOut from "./checkOut";
import filter from "./filter";
import showMore from "./showMore";

export default configureStore({
  reducer: {
    wishlist: countRed,
    cartList: cartControl,
    checkOut: checkOut,
    userNeed: filter,
    showMore: showMore,
  },
});
