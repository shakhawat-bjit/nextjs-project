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

export default ProductRow;
