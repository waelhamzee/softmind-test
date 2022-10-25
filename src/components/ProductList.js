import React from "react";
import Product from "./Product";
import Loading from "./Loading";

const ProductList = ({ products, loading }) => {
  if (loading) {
    return <Loading marginTop={"4rem"}/>;
  }

  return (
    <div className="products-center">
      {products.map((product, index) => {
        return <Product key={index} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
