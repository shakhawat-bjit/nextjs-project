import Link from "next/link";

const ProductRow = ({ props }) => {
  // console.log("props ",props)
  return (
    <tr>
      <td>{props?.title}</td>
      <td>
        <button onClick={() => alert(props?.title)}>Order</button>
        <br />
        <Link href={`/product/${props?.id}`}>Details</Link>
        <br />
        <Link href={`/product/wwt/wrwer/${props?.id}`}>All Segemnt</Link>
        {/* <Link href={`components/product/${props?.id}`}>Details</Link> */}
      </td>
    </tr>
  );
};

export default ProductRow;
