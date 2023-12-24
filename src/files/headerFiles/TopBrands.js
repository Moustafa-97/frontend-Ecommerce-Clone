import React from "react";
import TopBrandsImgs from "./TopBrandsImgs";

export default function TopBrands(props) {
  return (
    <>
      <div className="top-brands">
        <h2>Top Brands</h2>
        <div className="top-brands-types">
          <TopBrandsImgs imgs={props.image} tet={props.image} />
        </div>
      </div>
    </>
  );
}
