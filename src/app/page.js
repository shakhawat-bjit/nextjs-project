import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Products from "./component/products/page";

export default function Home() {
  // const router = useRouter();
  // const navigate = (route) => {
  //   router.push(route);
  // };

  return (
    <main
    // className={styles.main}
    >
      <Link href="login">Login Page</Link>
      {/* <button onClick={() => navigate("/login")}>Login Page</button> */}
      <br />
      <Link href="about">About Page</Link>
      {/* <button onClick={() => navigate("/about")}>About Page</button> */}
      <br />
      <Link href="posts">Posts</Link>

      <br />
      <br />
      <Link href="user-details">User Details</Link>
      <br />
      <Link href="image-test">Image Test</Link>
      <br />
      <Link href="font-test">Font Test</Link>
      <br />
      <Link href="meta-test">Metadata Test</Link>
      <Products />
    </main>
  );
}
