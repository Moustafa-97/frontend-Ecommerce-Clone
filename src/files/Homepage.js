import React from "react";
import CardsCarousel from "./CardsCarousel";
import Deals from "./Deals";
import Category from "./Category";
import useFetch from "./hooks/useFetch";
import BodyFirst from "./BodyFirst";
import FooterContact from "./footer/FooterContact";
import {
  shop1,
  shop2,
  shop3,
  shop4,
  mega1,
  mega2,
  mega3,
  mega4,
  focus1,
  focus2,
} from "./sources/sources";

export default function Homepage() {
  // fetching data ::
  const { data: products, isPending: pending1 } = useFetch(
    "https://dummyjson.com/products?skip=0&limit=30",
    "products1"
  );

  const { data: products2, isPending: pending2 } = useFetch(
    "https://dummyjson.com/products?skip=30&limit=30",
    "products2"
  );

  const { data: products3, isPending: pending3 } = useFetch(
    "https://dummyjson.com/products?skip=60&limit=30",
    "products3"
  );

  return (
    <>
      <Deals />
      <Category />
      {products.products && !pending1 ? (
        <div key={Math.random()} className="carousel">
          <BodyFirst
            shop1={shop1}
            shop2={shop2}
            shop3={shop3}
            shop4={shop4}
            mega1={mega1}
            mega2={mega2}
            mega3={mega3}
            mega4={mega4}
            focus1={focus1}
            focus2={focus2}
          />
          <CardsCarousel manyitems={products.products} />
        </div>
      ) : (
        <div key={Math.random()} className="carousel text-center h-44">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      {products2.products && !pending2 ? (
        <div key={Math.random()} className="carousel">
          <CardsCarousel manyitems={products2.products} />
        </div>
      ) : (
        <div key={Math.random()} className="carousel text-center h-44">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      {products3.products && !pending3 ? (
        <div key={Math.random()} className="carousel">
          <CardsCarousel manyitems={products3.products} />
        </div>
      ) : (
        <div key={Math.random()} className="carousel text-center h-44">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <FooterContact/>
    </>
  );
}
