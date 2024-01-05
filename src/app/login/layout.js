import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <h2>This is Log in Layout</h2>
      <ul>
        <li>
          <Link href="/login">Log In</Link>
        </li>
        <li>
          <Link href="/login/loginstudent">Student login</Link>
        </li>
        <li>
          <Link href="/login/loginteacher">Teacher login</Link>
        </li>
      </ul>
      {children}
      <h2>This is footer</h2>
    </div>
  );
};

export default Layout;
