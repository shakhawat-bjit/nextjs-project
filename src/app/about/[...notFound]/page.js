const NotFound = ({ params }) => {
  // console.log(params.notFound);
  return (
    <div>
      <h3>
        Sorry this page
        <span style={{ color: "red" }}>
          {' "'}about/
          {params?.notFound?.map((x) => (
            <span>{`${x}/`}</span>
          ))}
          {'" '}
        </span>
        does not exist
      </h3>
    </div>
  );
};

export default NotFound;
