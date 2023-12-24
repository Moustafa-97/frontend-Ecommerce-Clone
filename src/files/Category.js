import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { Categories } from "./sources/sources";
import "./category.css";

export default function Category() {
  // carousel responsive
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 16,
      slidesToSlide: 16,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
      slidesToSlide: 12,
      arrows: false,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 5,
      arrows: false,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
      arrows: false,
    },
  };

  return (
    <>
      <div className="category-carousel">
        <Carousel
          className="category-carosel-container"
          responsive={responsive}
          arrows={window.screen.width > 1024 ? true : false}
        >
          {Categories.map((catpic) => (
            <Link key={Math.random()} className="cat-link">
              <img src={catpic} alt="m" />
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
}
