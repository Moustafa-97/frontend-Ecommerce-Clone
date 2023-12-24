import React from "react";
import { useSelector } from "react-redux";
import "./wishList.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/countRed";


export default function WishList() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const dispatch = useDispatch();
  const handleWishAdd = async (wishProducts) => {
    dispatch(removeProduct({ wishProducts }));
  };
  const wishlist = useSelector((state) => state.wishlist.products);

  return (
    <>
      {wishlist.length === 0 ? (
        <section className="text-gray-600 h-full body-font overflow-hidden m-auto">
          <div className="container p-1 m-auto h-full">
            <div className="w-full h-96 m-auto border-b-2 border-gray-300 flex items-center justify-center">
              <div className=" text-center w-full lg:px-10 p-4 lg:py-0 mt-0 lg:m-auto">
                <h2 className="text-md title-font text-gray-500 tracking-widest">
                  NO PRODUCTS 🤨
                </h2>
                <div className="w-full lg:mt-5 text-center border-b-2 border-gray-100 m-auto">
                  <div>
                    <Link to="/" className=" no-underline text-black">
                      <button className=" mt-6 bg-yellow-300 p-2 rounded-xl">
                        CONTINUE SHOPPING
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <wishlist>
          <header className="w-full text-center border-b-4 border-black pt-12">
            <h2>Wishlist</h2>
          </header>
          <body className=" w-full ">
            <div className=" items-container flex items-center justify-between">
              <div className=" lg:w-full w-full">
                <products>
                  <Carousel className="carousel" responsive={responsive}>
                    {wishlist.map((prod) => (
                      <div key={Math.random()} className="container cont-item">
                        <div key={Math.random()} className="card">
                          <div key={Math.random()} className="card-pic">
                            <img
                              key={Math.random()}
                              src={prod.wishProducts.thumbnail}
                              alt="prod"
                            />
                          </div>
                          <div className="card-description">
                            <p className="desc" key={Math.random()}>
                              {prod.wishProducts.description.slice(0, 35) +
                                "..."}
                            </p>
                            <p className="price" key={Math.random()}>
                              $ {prod.wishProducts.price}
                            </p>
                            <p className="rate" key={Math.random()}>
                              ⭐{prod.wishProducts.rating}
                            </p>
                          </div>
                          <div className="card-btns">
                            <button
                              className={
                                wishlist ? "btn-add btn-add-added" : "btn-add"
                              }
                              key={prod.id}
                              onClick={() => handleWishAdd(prod)}
                            >
                              ⭐
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </products>
              </div>
              {/* <div className=" lg:w-1/3 lg:block hidden">
                <div>
                  <img className=" lg:w-full lg:h-72 outline-none" src={itemImg} alt="" />
                  <p>{itemDescription}</p>
                </div>
              </div> */}
            </div>
          </body>
        </wishlist>
      )}
    </>
  );
}
