"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const [details, setDetails] = useState({});
  const router = useRouter();
  console.log("params ", params);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, []);

  // console.log("details ", details);

  return (
    <div>
      <p>This is product details</p>
      <p>{details.title}</p>
      <p>{details.description}</p>
      <p>{details.price}</p>
      <button onClick={() => router.push("/")}> Go to Home </button>
    </div>
  );
};

export default ProductDetails;
