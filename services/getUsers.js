const loadUsers = async (url) => {
  let res = await fetch(url);
  let data = await res.json();
  // console.log("data ", data);
  return data?.users;
};

export default loadUsers;
