import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ShowCategory from "./ShowCategory";
import ShowMenu from "./ShowMenu";
import "./headerBottom.css";
import { setUserNeed } from "../redux/filter";
import { resetShown } from "../redux/showMore";
import useFetch from "../hooks/useFetch";
// import setShow() from "../Categories/UserFilter";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Headerbottom() {
  // fetching  data using useFetch::
  const { data: products1 } = useFetch(
    "https://dummyjson.com/products?skip=0&limit=30",
    "products1"
  );
  const { data: products2 } = useFetch(
    "https://dummyjson.com/products?skip=30&limit=30",
    "products2"
  );
  const { data: products3 } = useFetch(
    "https://dummyjson.com/products?skip=60&limit=30",
    "products3"
  );

  // setting array of elements::
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (products1?.products && products2?.products && products3?.products) {
      setProducts([
        ...products1.products,
        ...products2.products,
        ...products3.products,
      ]);
    }
  }, [products1.products, products2.products, products3.products]);

  const categoryNamesSet = new Set(
    products?.map((product) => product?.category)
  );
  const picsSet = new Set(products?.map((product) => product?.thumbnail));

  const categoryNamesArray = Array.from(categoryNamesSet).sort();
  const picsArray = Array.from(picsSet).sort();

  // redux:
  useSelector((state) => state.showMore.shown);
  const dispatch = useDispatch();
  const userSelection = (input) => {
    dispatch(setUserNeed({ input }));
  };
  const reset = () => {
    dispatch(resetShown());
  };

  const [showMenu, setShowMenu] = useState(false);
  // const [elementID, setElementID] = useState(null);

  const catbtn = document.getElementById("allCategory");
  useEffect(() => {
    let timeoutShow;
    if (showMenu) {
      timeoutShow = setTimeout(() => {
        catbtn.classList.replace("hide", "show");
      }, 500);
    }
    return () => {
      clearTimeout(timeoutShow);
    };
  }, [showMenu]);

  const handleMouseOver = () => {
    setShowMenu(true);
  };

  const handleMouseOut = (e) => {
    catbtn.classList.replace("show", "hide");
    setShowMenu(false);
  };

  // menubtn
  // const [showMenuC, setShowMenuC] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const handleMenuMouseOver = (e) => {
    if (waiting) {
      document.getElementById(e).classList.replace("hide", "show");
    }
  };

  const handleMenuMouseOut = (e) => {
    document.getElementById(e).classList.replace("show", "hide");
  };

  return (
    <>
      <div className="header-bottom">
        <div className="header-bottom-container">
          <Link
            className="categories borderR menu-show link"
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <div>
              <div id="allCategory" className={"hide"}>
                <ShowCategory categories={categoryNamesArray} />
              </div>
              All categories
            </div>
          </Link>
          {window.screen.width > 1024 ? (
            <div className="navigate-to">
              <ul className="ul">
                {categoryNamesArray &&
                  categoryNamesArray?.slice(0, 7)?.map((categoryName) => (
                    <Link
                      id={`${categoryName}s`}
                      key={Math.random()}
                      className="borderR li menu-show link the-hover"
                      to={`filter/${categoryName}`}
                      onClick={() => {
                        reset();
                        userSelection(categoryName);
                      }}
                      onMouseOver={(e) => {
                        setTimeout(() => {
                          setWaiting(true);
                        }, 500);
                        handleMenuMouseOver(categoryName);
                      }}
                      onMouseLeave={() => {
                        setWaiting(false);
                        handleMenuMouseOut(categoryName);
                      }}
                    >
                      <li
                        id={`${categoryName}s`}
                        key={Math.random()}
                        className="w-full h-full m-auto"
                      >
                        <div
                          id={categoryName}
                          key={Math.random()}
                          className="hide"
                        >
                          <ShowMenu
                            key={Math.random()}
                            categories={categoryNamesArray}
                            image={picsArray}
                          />
                        </div>
                        {categoryName}
                      </li>
                    </Link>
                  ))}
                <Link className="borderR li link" to="sellOnNoon">
                  <li>SELL ON NOON</li>
                </Link>
                <Link className="borderR li link" to="deals">
                  <li className="red">DEALS</li>
                </Link>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
