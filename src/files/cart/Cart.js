import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

import {
  decreaseCartItems,
  increaseCartItem,
  removeCartItem,
  clearCart,
} from "../redux/cartControl";

import { useDispatch } from "react-redux";
// import { AddRemoveProduct } from "../redux/countRed";

export default function Cart() {
  const totalPrice = useSelector((state) => state.cartList.finalTotalPrice);
  const items = useSelector((state) => state.cartList.cartItems);

  const dispatch = useDispatch();
  const handleDecreaseItems = (item) => {
    dispatch(decreaseCartItems(item));
  };
  const handleIncreaseItems = (item) => {
    dispatch(increaseCartItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item));
  };
  const handleClearCart = (item) => {
    dispatch(clearCart(item));
  };
  return (
    <>
      {items.length === 0 ? (
        <section className="text-gray-600  body-font overflow-hidden m-auto">
          <div className="container p-1 m-auto">
            <div className="lg:w-full mx-auto flex flex-wrap m-auto border-b-2 border-gray-300">
              <div className=" text-center w-full lg:px-10 p-4 lg:py-0 mt-0 m-auto">
                <h2 className="text-md title-font text-gray-500 tracking-widest">
                  ADD PRODUCTS 💃
                </h2>
                <div className="w-full mt-5 text-center border-b-2 border-gray-100 m-auto">
                  <div>
                    <Link to="/" className=" no-underline text-black">
                      <button className=" mt-6 bg-yellow-300 p-2 rounded-xl">
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="lg:flex block">
          <div className=" w-full lg:w-3/4">
            {items.map((item) => (
              <section className="text-gray-600  body-font overflow-hidden m-auto">
                <div className="container p-1 m-auto">
                  <div className="lg:w-4/5 mx-auto flex flex-wrap m-auto border-b-2 border-gray-300">
                    <div className="lg:w-1/4 w-full m-auto p-0 lg:pl-10 lg:py-0 mt-0 lg:mt-2 lg:m-auto">
                      <img
                        alt="ecommerce"
                        className="lg:w-full w-full lg:h-full h-full m-auto object-cover object-center rounded"
                        src={item.thumbnail}
                      />
                    </div>
                    <div className="lg:w-3/4 w-full lg:p-10 p-4 lg:py-0 mt-0 lg:mt-2 m-auto">
                      <h2 className="text-md title-font text-gray-500 tracking-widest">
                        {item.brand}
                      </h2>
                      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {item.category}
                      </h1>
                      <div className="flex mb-4">
                        <span className="flex items-center">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 text-yellow-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>

                          <span className="text-gray-600 ml-3">
                            {item.rating}
                          </span>
                        </span>
                      </div>
                      <p className="leading-relaxed">{item.description}</p>
                      <div className="flex w-full mt-5 items-center border-b-2 border-gray-100 m-auto">
                        <div className="flex justify-around w-2/4 m-auto text-center">
                          <div className=" w-1/2">
                            <span className="text-center">Qunt.</span>
                          </div>
                          <div className=" w-1/2">
                            <button
                              className="px-4 py-1 rounded-lg shadow-md bg-yellow-400"
                              onClick={() => handleIncreaseItems(item)}
                            >
                              +
                            </button>
                            <input
                              value={item.quantaty}
                              className="border-gray-100 m-0 px-0 py-1 border-collapse w-12 text-center"
                            />
                            <button
                              className="px-4 py-1 rounded-lg shadow-md bg-yellow-400"
                              onClick={() => handleDecreaseItems(item)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-around w-1/4 m-auto text-center">
                          <button
                            className="px-4 py-1 rounded-lg shadow-md bg-yellow-400"
                            onClick={() => handleRemoveItem(item)}
                          >
                            remove
                          </button>
                        </div>
                        <div className="text-center items-center w-1/4">
                          <span className="title-font font-medium text-2xl text-gray-900">
                            {item.totalPrice} $
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className=" lg:w-1/4 m-auto">
            <div className=" w-full m-auto text-center">
              <button
                className=" text-center mt-6 bg-yellow-300 p-2 rounded-xl"
                onClick={() => handleClearCart()}
              >
                clear
              </button>
            </div>
            <section className="text-gray-600  body-font overflow-hidden m-auto">
              <div className="container p-1 m-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap m-auto border-b-2 border-gray-300">
                  <div className=" text-center w-full lg:px-10 p-4 lg:py-0 mt-0 m-auto">
                    <h2 className="text-md title-font text-gray-500 tracking-widest">
                      your total
                    </h2>
                    <div className="w-full mt-5 text-center border-b-2 border-gray-100 m-auto">
                      <div className="text-center block items-center w-full">
                        <span className="title-font font-medium text-2xl text-gray-900">
                          {totalPrice} $
                        </span>
                      </div>
                      <div>
                        <button className=" mt-6 bg-yellow-300 p-2 rounded-xl">
                          get your prod
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
