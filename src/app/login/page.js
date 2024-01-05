"use client";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <p>This is Log in</p>
      <button onClick={() => alert("Successfully Logged in")}>Log In</button>
      <br />
      <button onClick={() => router.push("/")}> Go to Home </button>
    </div>
  );
};

export default Login;
