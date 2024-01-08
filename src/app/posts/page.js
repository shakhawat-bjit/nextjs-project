const loadPosts = async (url) => {
  let res = await fetch(url);
  let data = await res.json();
  console.log("data ", data);
  return data?.posts;
};

const Posts = async () => {
  //   console.log("Loadddddingggggggggggggggggg");
  const posts = await loadPosts("https://dummyjson.com/posts");

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => (
            <tr key={post?.id}>
              <td>{post?.title}</td>
              <td>{post?.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
