import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserNeed } from "../redux/filter";
export default function MenuList(props) {
  const dispatch = useDispatch();
  const selection = (input) => {
    dispatch(setUserNeed(input));
  };
  const navigate = useNavigate();
  return (
    <div className="list">
      <ul>
        {props.categories.map((category) => (
          <Link
            onClick={(e) => {
              selection(e.target.innerText);
              navigate("filter");
            }}
            key={Math.random()}
            className="menu-link"
          >
            <li>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
