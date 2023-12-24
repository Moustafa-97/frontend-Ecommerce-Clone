import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { AddRemoveProduct } from "./redux/countRed";
import "./cardsCarousel.css";

export default function CardsCarousel(props) {
  // carousel responsive::
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // use redux section:::
  const dispatch = useDispatch();
  // update wishList using redux
  const handleWishAdd = (wishProducts) => {
    dispatch(AddRemoveProduct({ wishProducts }));
  };
  // btn color
  const favoriteProduct = JSON.parse(localStorage.getItem("wishlist"))?.map(
    (product) => product.wishProducts.id
  );

  return (
    <>
      <h2 className=" font-serif text-xl p-3 border-b-2 border-black">
        Products
      </h2>
      <Carousel className="w-full" responsive={responsive}>
        {props.manyitems &&
          props.manyitems.map((prod) => (
            <div key={Math.random()} className="container cont-item">
              <Link to={`/products/${prod.id}`} className="productLink">
                <div key={Math.random()} className="card">
                  <div key={Math.random()} className="card-pic">
                    <img key={Math.random()} src={prod.thumbnail} alt="prod" />
                  </div>
                  <div className="card-description">
                    <p className="desc" key={Math.random()}>
                      {prod.description.slice(0, 40) + "..."}
                    </p>
                    <p className="price" key={Math.random()}>
                      $ {prod.price}
                    </p>
                    <p className="rate" key={Math.random()}>
                      ⭐{prod.rating}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="card-btns">
                <button
                  className={
                    favoriteProduct?.includes(prod.id)
                      ? "btn-add-abs btn-add btn-add-added"
                      : "btn-add-abs btn-add"
                  }
                  onClick={(e) => {
                    e.currentTarget.classList.toggle("btn-add-added");
                    handleWishAdd(prod);
                  }}
                >
                  ⭐
                </button>
              </div>
            </div>
          ))}
      </Carousel>
    </>
  );
}
