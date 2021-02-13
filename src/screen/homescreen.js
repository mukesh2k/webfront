import React from "react";
import data from "../data";
import Product from "../components/Product";
export default function homescreen() {
  return (
    <div className="row center">
      {data.products.map((products) => {
        return <Product product={products} key={products.id}></Product>;
      })}
    </div>
  );
}
