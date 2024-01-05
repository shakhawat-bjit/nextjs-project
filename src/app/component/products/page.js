"use client";
import { useEffect, useState } from "react";
import s1 from "./products.module.scss";
import ProductRow from "./productRow/page";

const Products = () => {
  //   console.log("style ", styles);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data?.products ", data?.products);
        setProducts(data?.products);
      });
  }, []);

  return (
    <div className={s1.myDesign}>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Product title</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <ProductRow props={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
