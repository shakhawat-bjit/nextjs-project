"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Products from "./components/products/Products";

export default function Home() {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  };

  return (
    <main
    // className={styles.main}
    >
      <Link href="login">Login Page</Link>
      <button onClick={() => navigate("/login")}>Login Page</button>
      <br />
      <Link href="about">About Page</Link>

      <button onClick={() => navigate("/about")}>About Page</button>
      <Products />
    </main>
  );
}
