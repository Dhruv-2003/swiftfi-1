import React, { useEffect, useState } from "react";
import SwiftPay from "../components/SwiftPay";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/dist/client/router";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import { payments_data, personalized_data } from "../constants/constants";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [details, setdetails] = useState({});
  const [requestId, setRequestId] = useState(0);
  const [requestData, setRequestData] = useState("");

  const router = useRouter();
  const _domain = router.query.domain;
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const Payments_Contract = useContract({
    address: payments_data.address,
    abi: payments_data.abi,
    signerOrProvider: signer || provider,
  });

  const Personalized_contract = useContract({
    address: personalized_data.address,
    abi: personalized_data.abi,
    signerOrProvider: signer || provider,
  });

  useEffect(() => {
    console.log("it worked ");
    searchDomain(_domain);
  }, [_domain]);

  const searchDomain = async (domain) => {
    try {
      console.log("Searching domain ...");
      const address = await Personalized_contract.getAddress(domain);
      setUserAddress(address);
      fetchDeatils(address);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDeatils = async (_address) => {
    try {
      const data = await Personalized_contract.getDetails(_address);
      console.log(data);
      const response = await fetch(data[1]);
      const ipfsData = await response.json();
      console.log(ipfsData);

      const parsedResponse = {
        PageName: ipfsData.PageName,
        PageDescription: ipfsData.PageDescription,
        Contact: ipfsData.Contact,
        Domain: data[0],
      };

      console.log(parsedResponse);
      setdetails(parsedResponse);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        className={`${styles.bg} px-6 min-h-screen bg-[#0000008b] flex items-center justify-center flex-wrap`}
      >
        <div
          className={`${styles.paylink} flex flex-col items-center justify-start w-full `}
        >
          <h1 className="pt-6 pb-2 text-lg md:text-xl font-semibold text-center">
            gm!!! this personalized payment page was created with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://swiftfi.vercel.app"
            >
              <u>SwiftFi</u>
            </a>{" "}
            🚀
          </h1>
          <h1 className=" mt-4 text-lg font-semibold lg:text-3xl mx-auto pb-2  text-center">
            {details.PageName}
          </h1>

          <div className="max-w-[700px] md:mt-[50px]">
            <h1 className="text-3xl  font-semibold pb-8 text-center">
              <span className="underline">Description</span>
            </h1>
            <p className="text-center px-4 pb-8">{details.PageDescription}</p>
            <h2 className="text-center px-4 pb-8">
              Email :
              <a className=" underline" href={`${"mailto:${`EMAIL HERE`}"}`}>
                {details.Contact}
              </a>
            </h2>
          </div>

          <div>
            <SwiftPay />
          </div>
        </div>
      </div>
    </div>
  );
}
