"use client";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h2>This is from common login (page)</h2>
    </div>
  );
};

export default Login;
