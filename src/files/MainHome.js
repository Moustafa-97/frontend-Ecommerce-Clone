import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import WishList from "./wishlist/WishList";
import ProductDetail from "./ProductDetail";
import Header from "./headerFiles/Header";
import Cart from "./cart/Cart";
import UserFilter from "./Categories/UserFilter";
import Login from "./signup-login/Login";
import Signup from "./signup-login/Signup";

export default function MainHome() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/filter/:c" element={<UserFilter />} />
      </Routes>
    </BrowserRouter>
  );
}
