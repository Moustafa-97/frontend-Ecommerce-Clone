import React from "react";
import MenuList from "./MenuList";
import "./menu.css"
export default function ShowCategory(props) {
  return (
    <>
      <div className="menu-cat">
        <MenuList key={Math.random()} categories={props.categories} />
      </div>
    </>
  );
}
