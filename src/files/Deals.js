import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { HomePic, topBrands , Deal1 } from "./sources/sources";
import "./deals.css";
export default function Deals() {
  //  carosel responsive
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  
  return (
    <>
      <div className="deals">
        <div className="container">
          
          <div className="now-offer lg:block hidden">
            <Link>
              <img src={HomePic} alt="offer" />
            </Link>
          </div>
          <div className="swippers">
            <Carousel
              className="Carousel"
              additionalTransfrom={0}
              autoPlaySpeed={2500}
              centerMode={false}
              containerClass="container"
              draggable
              focusOnSelect={false}
              minimumTouchDrag={80}
              infinite
              responsive={responsive}
              autoPlay={true}
              slidesToSlide={1}
              swipeable
              arrows={window.screen.width>1024 ? true : false}
            >
              {topBrands.map((pic) => (
                <Link>
                  <img src={pic} alt="m" className="lg:h-[300px] h-[200px]" />
                </Link>
               ))} 
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
