import Link from "next/link";

const ProductRow = ({ props }) => {
  // console.log("props ",props)
  return (
    <tr>
      <td>{props?.title}</td>
      <td>
        <button onClick={() => alert(props?.title)}>Order</button>
        <Link href="/components/products/details">Details</Link>
      </td>
    </tr>
  );
};

export default ProductRow;
