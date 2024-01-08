"use client";
import Link from "next/link";

const Page = async (props) => {
  console.log(props?.params?.userId);
  return (
    <div>
      <h2>User Details</h2>
      <p>User Id:{props?.params?.userId}</p>
    </div>
  );
};

export async function generateStaticParams() {
  const users = await loadUsers("https://dummyjson.com/users");
  return users?.map((user) => {
    userId: user?.id?.toString();
  });
}

export default Page;
