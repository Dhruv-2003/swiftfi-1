import styles from "../styles/Layout.module.css";
import logo from "../assets/navLogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src={logo} />
          </Link>
        </div>

        <ul>
          <li className={styles.navLink}>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </nav>

      <div className="min-h-screen">
        {children}
      </div>

      <footer className={styles.footer}>
        <h4>
          Built by{" "}
          <u>
            <a
              href="https://twitter.com/kushagrasarathe"
              target="_blankspace"
              rel="noreferrer"
            >
              Kushagra Sarathe
            </a>
          </u>
          <span> &#38; </span>
          <u>
            <a
              href="https://twitter.com/0xdhruva"
              target="_blankspace"
              rel="noreferrer"
            >
              Dhruv Agarwal
            </a>
          </u>
        </h4>
      </footer>
    </>
  );
}
