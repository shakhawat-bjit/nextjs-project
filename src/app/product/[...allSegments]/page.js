"use client";
import { useRouter } from "next/navigation";

const ProductDetails = ({ params }) => {
  const router = useRouter();
  // console.log("params ", params);

  return (
    <div>
      <h2>This is all segements </h2>
      <div>
        {params?.allSegments?.map((param) => (
          <span key={param}>{param}, </span>
        ))}
      </div>
      <br />
      <button onClick={() => router.push("/")}> Go to Home </button>
    </div>
  );
};

export default ProductDetails;
