import React from "react";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";
import TopBrands from "./TopBrands";
import "./menu.css"

export default function ShowMenu(props) {
  return (
    <>
      <div className="menu">
        <MenuList categories={props.categories} />
        <TopBrands image={props.image} />
        <div className="images-list">
          <div className="first-img">
            <Link key={Math.random()} className="">
              <img
                src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="img-list"
              />
            </Link>
          </div>
          <div className="sec-img">
            <Link key={Math.random()} className="">
              <img
                src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="img-list"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
