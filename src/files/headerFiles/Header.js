import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Headerbottom from "./Headerbottom";
import "./header.css";
import { logo } from "../sources/sources";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserNeed } from "../redux/filter";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser, FaOpencart, FaSearch } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
export default function Header() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const setUser = (e) => {
    if (!e) {
      return;
    } else {
      dispatch(setUserNeed({ input }));
    }
  };

  // redux part:::

  const number = useSelector((state) => state.wishlist.number);
  const quantaty = useSelector((state) => state.cartList.cartItemQuantaty);

  const [bg, setbg] = useState(null);
  const [show, setShow] = useState(false);

  const handleShowBtn = () => {
    setShow(!show);
  };
  const handleShowBg = () => {
    if (show === "user-side-menu hide-user-side-menu") {
      setShow("user-side-menu");
      setbg(" ");
    }
  };
  const userIsLogin = JSON.parse(localStorage.getItem("ThisUser"));
  const [logout, setLogout] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("ThisUser");
    setLogout(false);
  };
  const navigate = useNavigate();
  return (
    <>
      {show ? (
        <div
          onClick={() => setShow(!show)}
          className="w-screen h-screen bg-white opacity-40 z-[1001] absolute"
        ></div>
      ) : (
        <div></div>
      )}

      <div className=" relative">
        <div className="header">
          <div className="header-container">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="noon" />
              </Link>
            </div>
            <div className="flex search-bar bg-white rounded-xl">
              <input
                id="input"
                className="text-center input-area"
                type="search"
                placeholder="What you are looking for?"
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    setInput(input.toLowerCase());
                    setUser(input);
                    navigate(`filter/${input}`);
                    e.target.value = " ";
                  }
                }}
                onInput={(e) => setInput(e.target.value.toLowerCase())}
              />
              <button
                onClick={() => {
                  setInput(input.toLowerCase());
                  setUser(input);
                }}
              >
                <span
                  onClick={() => {
                    if (input) {
                      navigate(`filter/${input}`);
                    } else {
                      navigate("/");
                    }
                  }}
                >
                  <FaSearch />
                </span>
              </button>
            </div>
            <div className="user-side">
              <div className="">
                <ul className="user-side-list">
                  <li className="login">
                    {userIsLogin ? (
                      <div
                        onMouseOver={() => setLogout(true)}
                        onMouseLeave={() => setLogout(false)}
                        className=" h-full m-auto"
                      >
                        <span>{userIsLogin.firstname}</span>
                        {logout ? (
                          <div
                            onClick={() => {
                              handleLogout();
                            }}
                            className=" bg-white hover:bg-red-600 px-0 py-3 absolute text-sm top-10 z-10 right-66 cursor-pointer"
                          >
                            <span className="ml-2 text-start">Logout</span>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ) : (
                      <Link
                        className="flex items-center justify-center gap-3 link"
                        to="login"
                      >
                        Login
                        <FaRegUser size={18} />
                      </Link>
                    )}
                  </li>
                  <li className="wishlist">
                    <Link
                      className="flex items-center justify-center gap-3 relative link"
                      to="wishlist"
                    >
                      Wishlist
                      <CiStar size={20} />
                      <span className="absolute -top-[3px] -right-0 text-[10px]">
                        {number}
                      </span>
                    </Link>
                  </li>
                  <li className="cart">
                    <Link
                      className="flex items-center justify-center gap-3 relative link"
                      to="cart"
                    >
                      Cart
                      <FaOpencart size={18} className="" />
                      <span className="absolute -top-[3px] -right-0 text-[10px]">
                        {quantaty}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* small screens */}
              <div className="user-side-btn z-[1002]">
                <div>
                  <button
                    onClick={handleShowBtn}
                    className={show ? "rotate-90" : ""}
                  >
                    <GiHamburgerMenu />
                  </button>
                </div>
                <div className={show ? "user-side-menu " : " hidden"}>
                  <ul className="user-side-menu-list">
                    <li className="w-full gap-3 flex items-center justify-center py-2">
                      {userIsLogin ? (
                        <div
                          onClick={() => setLogout(!logout)}
                          className=" h-full m-auto"
                        >
                          <span>{userIsLogin.firstname}</span>
                          {logout ? (
                            <div
                              onClick={() => {
                                handleLogout();
                              }}
                              className="bg-red-600 px-0 py-3 absolute text-sm top-0 z-10 -left-7 cursor-pointer"
                            >
                              <span className="ml-2 text-start">Logout</span>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      ) : (
                        <Link
                          className="flex items-center justify-center gap-3"
                          to="/login"
                          onClick={handleShowBtn}
                        >
                          Login
                          <FaRegUser size={18} />
                        </Link>
                      )}
                    </li>
                    <li className="w-full gap-3 flex items-center justify-center py-2">
                      <Link
                        className="flex items-center justify-center gap-3"
                        to="wishlist"
                        onClick={handleShowBtn}
                      >
                        Wishlist
                        <CiStar size={20} />
                        {number}
                      </Link>
                    </li>
                    <li className="w-full gap-3 flex items-center justify-center py-2">
                      <Link
                        className="flex items-center justify-center gap-3"
                        to="/cart"
                        onClick={handleShowBtn}
                      >
                        Cart
                        <FaOpencart size={18} />
                        {quantaty}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleShowBg} className={bg}></div>

      <Headerbottom />
    </>
  );
}
