"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";

export default function Home() {
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

  // console.log("products ---- ", products)

  return (
    <main className={styles.main}>
      <h1>Products</h1>
      <div className={styles.myDesign}>
        {/* {
          products?.map(product=><ProductList props={product}/>)
        } */}

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
    </main>
  );
}

const ProductList = ({ props }) => {
  // console.log("props ",props)
  return (
    <div>
      <h5>{props?.title}</h5>
    </div>
  );
};

const ProductRow = ({ props }) => {
  // console.log("props ",props)
  return (
    <tr>
      <td>{props?.title}</td>
      <td>
        <button onClick={() => alert(props?.title)}>Order</button>
      </td>
    </tr>
  );
};
