import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useSelector, useDispatch } from "react-redux";
import LoadBox from "../screen/Loadscreen";
import Error from "../screen/ErorBox";
import { detailProducts } from "../actions/productActions";
export default function Productscreen(props) {
  const dispatch = useDispatch();
  const pid = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailProducts(pid));
  }, [dispatch, pid]);
  return loading ? (
    <LoadBox />
  ) : error ? (
    <Error>{error}</Error>
  ) : (
    <div className="row top">
      <Link to="/">Back to results</Link>
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
        <div className="card card-bd">
          <ul>
            <li>
              <div className="row">
                <div>Price </div>
                <div className="price">{product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status :</div>
                <div>
                  {product.noofstock > 0 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="error">Out of Stock</span>
                  )}
                </div>
              </div>
            </li>
            <li>
              <button className="primary block">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
