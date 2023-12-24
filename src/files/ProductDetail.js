import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddRemoveProduct } from "./redux/countRed";
import { addToCart } from "./redux/cartControl";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./productDetail.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductDetail = () => {
  // swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products/" + id)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setIsPending(!isPending);
          setProduct(data);
          setPrice(data.price);
        });
    }, 1000);
  }, [id, isPending, product]);
  // use redux Part:::

  const [quantaty, setQuantaty] = useState(1);
  const [price, setPrice] = useState(product);
  const inc = () => {
    if (quantaty !== 10) {
      setQuantaty(quantaty + 1);
    }
  };
  const dec = () => {
    if (quantaty !== 1) {
      setQuantaty(quantaty - 1);
    }
  };

  const dispatch = useDispatch();
  const handleWishAdd = (wishProducts) => {
    // update wishList using redux
    dispatch(AddRemoveProduct({ wishProducts }));
  };
  const handleCartAdd = (cartProducts) => {
    // update cart using redux
    dispatch(
      addToCart({
        ...cartProducts,
        quantaty,
        totalPrice: price * quantaty,
      })
    );
  };

  const productIn = JSON.parse(localStorage.getItem("wishlist"))?.map(
    (product) => product.wishProducts.id
  );
  const width = window.screen.width;

  return (
    <>
      {product && (
        <div className="selected-product">
          <div className="product-container">
            <div className="lg:flex">
              <div className="lg:w-1/3 w-full h-full ">
                <div className="product-show">
                  <div className="all-prod-img h-full lg:block hidden">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      height
                      direction={"vertical"}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper swiper-all-img"
                    >
                      {product.images.map((img) => (
                        <SwiperSlide className="swiper-slide h-5 w-5">
                          <img src={img} alt="0" className="h-5 w-5" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="single-prod-img">
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      loop={true}
                      spaceBetween={10}
                      navigation={width > 1024 ? true : false}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2 swiper-one-img"
                    >
                      {product.images.map((img) => (
                        <SwiperSlide className="swiper-one-img">
                          <img src={img} alt={product.title} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="product-data lg:w-3/2 w-full">
                <div key={Math.random()} className="product-deatils">
                  <div className="product-brand-title">
                    <p className="prod-brand" key={Math.random()}>
                      {product.brand}
                    </p>
                    <p className="prod-desc" key={Math.random()}>
                      {product.description}
                    </p>
                    <p className="prod-category" key={Math.random()}>
                      {product.category}
                    </p>
                    <p className="prod-price-a" key={Math.random()}>
                      NOW: <span className="prod-price">$ {price}</span>{" "}
                      (Inclusive of VAT)
                    </p>
                  </div>
                  <div key={Math.random()} className="product-desc-sec">
                    <div className="product-payment-offers">
                      <img
                        className="noon-card"
                        src="	https://f.nooncdn.com/mpcms/EN0003/assets/91e6e8bd-728f-4baa-8b1a-e00645521515.png?format=avif"
                        alt="noon-card"
                      />
                    </div>
                  </div>

                  <div className="product-purchace-section">
                    <div className="quantaty-select">
                      <button className="px-5 py-1 w-8 rounded-lg shadow-md bg-blue-600" onClick={() => dec()}>-</button>
                      <p>{quantaty}</p>
                      <button className="px-5 py-0 w-8 rounded-lg shadow-md bg-blue-600" onClick={() => inc()}>+</button>
                    </div>

                    <button
                      className="add-to-cart shadow-lg"
                      onClick={() => {
                        handleCartAdd(product);
                      }}
                    >
                      ADD TO CART
                    </button>
                    <button
                      className={
                        productIn?.includes(product.id)
                          ? "prodbtn-add prodbtn-add-added shadow-lg"
                          : "prodbtn-add shadow-lg"
                      }
                      onClick={(e) => {
                        e.currentTarget.classList.toggle("btn-add-added");
                        handleWishAdd(product);
                      }}
                    >
                      ⭐
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
