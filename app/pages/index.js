import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Layout from "../components/Layout";
import wallet from "../assets/wallet.png";
import Link from "next/link";
import Register from "../components/Register";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="pt-[3rem]">
          <div className={`${styles.main} pt-14`}>
            <div className={`${styles.left} md:pt-0 pt-14`}>
              <h1 className={styles.heading}>
                <span className={styles.color1}>Swift</span>
                <span className={styles.color2}>Fi</span>
              </h1>
              <p>
                SwiftFi is a platform that lets you receive payments in the form
                of crypto by generating a unique link for every user.
              </p>
              <p>
                SwiftFi also offers you to invest received money directly to
                stream, with couple of other options to help manage and make
                payments easily.
              </p>
              <p>
                You can also use gift cards to send money to your loved ones or
                the crypto card feature to pay on your favourite websites :D
              </p>
              <div className={`flex items-center justify-start ${styles.buttons}`}>
                <Link href={"/dashboard"}>
                  <button className={styles.btnPrimary}>Dashboard 🚀</button>
                </Link>
                {/* <a
                  target="_blank"
                  href="https://github.com/SwiftFi"
                  rel="noopener noreferrer"
                > */}
                  <Register />
                  {/* <button className={styles.btnSecondary}>Github 😎</button> */}
                {/* </a> */}
              </div>
            </div>
            <div className={styles.right}>
              <Image className={styles.hero} src={wallet} />
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.gradientBox}>
              <h1 className="text-3xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                possimus libero, est unde nesciunt quis minus vitae aut{" "}
              </h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
