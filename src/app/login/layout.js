"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./login.module.scss";

const Layout = ({ children }) => {
  const pathName = usePathname();
  console.log("pathName ", pathName);
  return (
    <div className={styles.logIn}>
      <h2>This is Log in Layout</h2>
      <ul>
        <li>
          <Link
            href="/login"
            className={pathName == "/login" && styles.activeRoute}
          >
            Log In
          </Link>
        </li>
        <li>
          <Link
            href="/login/loginstudent"
            className={pathName == "/login/loginstudent" && styles.activeRoute}
          >
            Student login
          </Link>
        </li>
        <li>
          <Link
            href="/login/loginteacher"
            className={pathName == "/login/loginteacher" && styles.activeRoute}
          >
            Teacher login
          </Link>
        </li>
      </ul>
      {children}
      <h2>This is footer</h2>
    </div>
  );
};

export default Layout;
