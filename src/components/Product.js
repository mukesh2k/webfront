import React from "react";
import Rating from "./Rating";
export default function Product(props) {
  const products = props.product;
  return (
    <div>
      <div className="card" key={products.id}>
        <a href="photo.html">
          <img src={products.img} alt="" className="sty" />
        </a>
        <div className="card-bd">
          <a href={"/product/" + products.id}>
            <h2>{products.name}</h2>
          </a>
          <div className="rate">
            <Rating
              rating={products.rating}
              numofrating={products.nor}
            ></Rating>
          </div>
          <div className="prize">
            <h2>Rs.{products.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
