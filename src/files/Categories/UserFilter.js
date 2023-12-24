import React from "react";
import Deals from "../Deals";
import Category from "../Category";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { AddRemoveProduct } from "../redux/countRed";
import { Link } from "react-router-dom";
export default function UserFilter() {
  const [...products] = [
    ...JSON.parse(localStorage.getItem("products1")).products,
    ...JSON.parse(localStorage.getItem("products2")).products,
    ...JSON.parse(localStorage.getItem("products3")).products,
  ];

  const wishlist = useSelector((state) => state.wishlist.products);
  const wishP = wishlist.map((m) => m.wishProducts.id);

  const selectedCategory = useSelector((state) => state.userNeed.userNeed);

  const selected = JSON.parse(localStorage.getItem("userNeed"));

  const userSelect = products.filter((i) => i.category === selected);

  const dispatch = useDispatch();

  const handleAddToWishlist = (wishProducts) => {
    dispatch(AddRemoveProduct({ wishProducts }));
  };

  return (
    <>
      <Deals />
      <Category />
      <div className="container">
        <div className=" w-4/5 m-auto text-center">
          <div>
            <h2 className=" text-2xl">
              {selectedCategory === " " ? selectedCategory : selected}
            </h2>
          </div>
          <div>
            <ul className=" flex justify-center items-center w-full flex-wrap m-auto">
              {userSelect &&
                userSelect?.map((prod) => (
                  <li
                    key={Math.random()}
                    className=" relative lg:w-1/3 w-full m-auto self-center "
                  >
                    <div key={Math.random()} className="container cont-item">
                      <Link to={`/products/${prod.id}`} className=" m-auto ">
                        <div key={Math.random()} className="card">
                          <div key={Math.random()} className="card-pic">
                            <img
                              className="relative"
                              key={Math.random()}
                              src={prod.thumbnail}
                              alt="prod"
                            />
                          </div>
                          <div className="card-description">
                            <p className="desc" key={Math.random()}>
                              {prod.description.slice(0, 35) + "..."}
                            </p>
                            <p className="price" key={Math.random()}>
                              $ {prod.price}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className=" absolute top-14 left-10 card-btns">
                      <button
                        onClick={() => {
                          handleAddToWishlist(prod);
                        }}
                        className={
                          wishP.includes(prod.id)
                            ? "rounded-xl bg-yellow-300"
                            : "rounded-xl bg-transparent"
                        }
                        key={prod.id}
                      >
                        ⭐
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
