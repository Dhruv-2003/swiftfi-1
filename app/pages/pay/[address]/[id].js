import { Button } from "flowbite-react";
import React from "react";
import styles from "../../../styles/Home.module.css";

/// for payment Request
export default function Id() {
  return (
    <div className={`${styles.bg} flex items-start justify-center flex-wrap`}>
      <div
        className={`${styles.profileCard}  flex flex-col items-center justify-start w-full h-[300px]`}
      >
        <h1 className="lg:mt-[40px] mt-[0px] pb-2 text-lg md:text-2xl font-semibold text-center">
          gm{" "}
          <span className="text-xl md:text-2xl font-semibold">
            Kushagra Sarathe
          </span>
          !!! this payment page was created with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://swiftfi.vercel.app"
          >
            <u>SwiftFi</u>
          </a>{" "}
          🚀
        </h1>
        <h1 className="text-lg lg:text-xl mx-auto pb-8  text-center">
          <span className="text-lg font-semibold">
            {"0xA25c5bE1324764573dE0a14ABFe0279B4291adfA".slice(0, 20)}...
          </span>{" "}
          has requested you <span className="text-lg font-semibold">$5000</span>
        </h1>
      </div>

      <div className="max-w-[700px] mt-[230px] md:mt-[50px]">
        <h1 className="text-3xl  font-semibold pb-8 text-center">
          <span className="underline">Here&#39;s a note for you</span>🫡
        </h1>
        <p className="text-center px-4 pb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          aspernatur, pariatur consequuntur optio error odit quaerat officia
          explicabo obcaecati. Quis, tempora quia. Rerum sed, doloremque ipsa
        </p>
      </div>

      <div className={`${styles.payCard}`}>
        <div className="flex flex-col  w-[300px] h-[300px] bg-gray-100 flex-wrap justify-center items-center px-6 py-4 rounded-md">
          <h1 className="text-black">Select Payment Option</h1>

          <Button className="w-[130px] py3 my-3">Pay Now</Button>

          <Button className="w-[130px] py3 my-3">Pay Later</Button>

          <Button className="w-[130px] py3 my-3">Pay in Stream</Button>
        </div>
      </div>
      {/* <div className={styles.align}>
        <Phone />
      </div> */}
    </div>
  );
}
