import React from "react";
import Rating from "../components/Rating";
import data from "../data";
export default function productscreen(props) {
  const product = data.products.find((x) => x.id == props.match.params.id);
  if (!product) {
    return (
      <div>
        <h2></h2>
        <h2>{props.match.params.id}</h2>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="col-2">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="col-1">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating rating={product.rating} numofrating={product.nor} />
          </li>
          <li>Price :Rs. {product.price}</li>
          <li>
            <p> Description : {product.description}</p>
          </li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
