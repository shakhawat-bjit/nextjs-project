"use client";
import { useRouter } from "next/navigation";

const ProductDetails = () => {
  const router = useRouter();
  return (
    <div>
      <p>This is product details</p>
      <button onClick={() => router.push("/")}> Go to Home </button>
    </div>
  );
};

export default ProductDetails;
