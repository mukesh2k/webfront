import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadBox from "./Loadscreen";
import Error from "./ErorBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
export default function Homescreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { isLoad, iserr, pro } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return isLoad ? (
    <LoadBox />
  ) : iserr ? (
    <Error>{iserr}</Error>
  ) : (
    <div className="row center">
      {pro.map((products) => {
        return <Product product={products} key={products.id}></Product>;
      })}
    </div>
  );
}
