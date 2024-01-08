"use client";
import { useEffect, useState } from "react";
import s1 from "./products.module.scss";
import ProductRow from "./productRow/page";

const fetchProducts = async (url) => {
  const response = await fetch(url);
  // console.log("response ", response);
  const data = await response.json();
  // console.log("data ", data);
  return data.products;
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("data?.products ", data?.products);
    //     setProducts(data?.products);
    //   });

    let fetchFunction = async () => {
      const products = await fetchProducts("https://dummyjson.com/products");
      setProducts(products);
    };

    fetchFunction();
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
            <ProductRow key={product?.id} props={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
