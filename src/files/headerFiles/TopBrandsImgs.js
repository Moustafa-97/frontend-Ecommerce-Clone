import React from "react";
import { Link } from "react-router-dom";

export default function TopBrandsImgs(props) {
  /*we can loop over the top brands logos using .map*/
  return (
    <>
      <div className="top-brands-imgs">
        <ul>
          {props?.imgs?.slice(0, 9)?.map((pic) => (
            <li key={Math.random()}>
              <Link className="tbl" key={Math.random()}>
                <img src={pic} alt="top-brand" key={Math.random()} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
