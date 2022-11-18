import Head from "next/head";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Features.module.css";
import Image from "next/image";
import Layout from "../components/Layout";
import wallet from "../assets/wallet.png";
import Link from "next/link";
import Register from "../components/Register";
import poly from "../assets/poly1.png";
import swiftpay from "../assets/swiftpay.png";

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
              <br />
              <p>
                SwiftFi also offers you four different payment options, Pay Now,
                Pay Later, Pay using EMI, Pay in Stream
              </p>
              <br />
              <p>
                You can also use gift cards to send money to your loved ones.
                <br />
                <br />
                SwiftPay is another feature of SwiftFi that offers you a npm
                package which you can use in your projects and integrate
                different payment options all at once :D
              </p>
              <div
                className={`flex items-center justify-start ${styles.buttons}`}
              >
                <Link href={"/dashboard"}>
                  <button className={styles.btnPrimary}>Dashboard 🚀</button>
                </Link>

                <Register />
                {/* <a
                  target="_blank"
                  href="https://github.com/SwiftFi"
                  rel="noopener noreferrer"
                > 
               <button className={styles.btnSecondary}>Github 😎</button> 

                 </a> */}
              </div>
            </div>
            <div className={`${styles.right}`}>
              {/* <Image className={styles.hero} src={wallet} /> */}
              <div
                className={`  my-20 sm:my-20 lg:my-0 hover:scale-110 transition-transform ease-in-out ${styles2.tariffCards}`}
              >
                <div className={styles2.economy}>
                  <Image
                    className=" mx-auto w-fit top"
                    src={poly}
                    alt="eth"
                    height="150"
                  />
                  <h3>Create Unique Payment Links</h3>
                  <span>
                    Receive payments easily by setting up unique payment links{" "}
                  </span>
                </div>
                <div className={styles2.premiumeconomy}>
                  <Image
                    className=" mx-auto w-fit top"
                    src={poly}
                    alt="eth"
                    height="150"
                  />
                  <h3>Send Gift Cards</h3>
                  <span>
                    Create Gift Cards and send them to your loved ones
                  </span>
                </div>
                <div className={styles2.business}>
                  <Image
                    className=" mx-auto w-fit top"
                    src={poly}
                    alt="eth"
                    height="150"
                  />
                  <h3>Cretae Unique Payment Pages </h3>
                  <span>
                    Create payment pages easily for special events and recieve
                    money easily{" "}
                  </span>
                </div>
                <div className={styles2.first}>
                  <Image
                    className=" mx-auto w-fit top"
                    src={poly}
                    alt="eth"
                    height="150"
                  />
                  <h3>Choose b/w 4 Options</h3>
                  <span>
                    SwiftFi offers you options like Pay Now, Pay Later, Pay EMI,
                    Pay in Stream{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8 flex justify-evenly items-start flex-wrap-reverse md:flex-wrap">
            <div
              className={`px-4 w-[550px] hover:scale-105 transition-transform ease-in-out ${styles.swiftpay}`}
            >
              <Image className="" src={swiftpay} alt="swiftpay" />
            </div>
            <div className=" ">
              <h1 className="my-8 px-4 underline text-center text-3xl font-semibold">
                SwiftPay - The Payment Component{" "}
              </h1>
              <div className="max-w-[500px] md:p-0 p-4 text-justify text-[17px] ">
                SwiftFi - Payment Component to enable accepting payments in
                crypto with multi-chain and multi-coin support . Offer payment
                options like PayNow , PayLater , PayViaEMI and PayVia Stream to
                your payers directly from the component , powered by SwiftFi
                Smart Contracts deployed on Blockchain . Integrate in your
                Website with just few lines of Code and provide seemless
                experience of paying via crypto to your users.
              </div>
              <div className="mt-5">
                <a
                  target="_blank"
                  href="https://github.com/SwiftFi"
                  rel="noopener noreferrer"
                >
                  <button className={styles.btnPrimary}>
                    {" "}
                    Get SwiftPay Package 😎
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
