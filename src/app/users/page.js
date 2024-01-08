"use client";
import Link from "next/link";
import loadUsers from "../../../services/getUsers";

const Page = async () => {
  const users = await loadUsers("https://dummyjson.com/users");

  return (
    <div>
      <h2>User list</h2>
      {users?.map((x) => (
        <p key={x?.id}>
          <Link
            href={`users/${x?.id}`}
          >{`${x?.firstName} ${x?.lastName}`}</Link>
        </p>
      ))}
    </div>
  );
};

export default Page;
