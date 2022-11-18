import Head from "next/head";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Features.module.css";
import Image from "next/image";
import Layout from "../components/Layout";
import wallet from "../assets/wallet.png";
import Link from "next/link";
import Register from "../components/Register";
import poly from "../assets/poly1.png";

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
              <div
                className={`flex items-center justify-start ${styles.buttons}`}
              >
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
            <div className={`${styles.right}`}>
              {/* <Image className={styles.hero} src={wallet} /> */}
              <div className={`  my-20 sm:my-20 lg:my-0  ${styles2.tariffCards}`}>
                <div className={styles2.economy}>
                  <Image
                    className=" mx-auto w-fit top"
                    src={poly}
                    alt="eth"
                    height="150"
                  />
                  <h3>Create Unique Payment Links</h3>
                  <span>Receive payments easily by setting up unique payment links </span>
                </div>
                <div className={styles2.premiumeconomy}>
                  <Image
                    className=" mx-auto w-fit top"
                    src={poly}
                    alt="eth"
                    height="150"
                  />
                  <h3>Send Gift Cards</h3>
                  <span>Create Gift Cards and send them to your loved ones</span>
                </div>
                <div className={styles2.business}>
                  <Image
                    className=" mx-auto w-fit top"
                    src={poly}
                    alt="eth"
                    height="150"
                  />
                  <h3>Cretae Unique Payment Pages </h3>
                  <span>Create payment pages easily for special events and recieve money easily </span>
                </div>
                <div className={styles2.first}>
                  <Image
                    className=" mx-auto w-fit top"
                    src={poly}
                    alt="eth"
                    height="150"
                  />
                  <h3>Choose b/w 4 Options</h3>
                  <span>SwiftFi offers you options like Pay Now, Pay Later, Pay EMI, Pay in Stream  </span>
                </div>
              </div>
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

        <div></div>
      </Layout>
    </>
  );
}
