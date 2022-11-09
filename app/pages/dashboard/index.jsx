import React from "react";
import Link from "next/link.js";
import DashboardLayout from "../../components/DashboardLayout";
import styles from "../../styles/Home.module.css";
import { Card } from "flowbite-react";

export default function DashboardHome() {
    return (
        <div>
            <DashboardLayout>
                <div className="flex flex-col justify-start pt-20">
                    <h1 className="text-xl pt-3 md:pt-0 md:text-3xl font-semibold pb-8 text-center w-[95%] mx-auto">
                        gm {`0xA25c5bE1324764573dE0a14ABFe0279B4291adfA`.slice(0, 20)}.... welcome to your personalized SwiftFi dashboard 🚀
                    </h1>

                    <div className="">
                        <Card
                            className={`${styles.profileCard} md:w-[75%] mx-auto transition hover:scale-105 ease-in-out`}
                        >
                            <div className="flex flex-col items-center pb-4 ">
                                <img
                                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                    src="https://cdn.dribbble.com/users/1684249/screenshots/15431837/media/b8793da764afaf229379b316181bf8eb.gif"
                                    alt="Bonnie image"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    Kushagra Sarathe
                                </h5>
                                <span className="text-sm font-semibold text-gray-900 dark:text-gray-400">
                                    0xA25c5bE1324764573dE0a14ABFe0279B4291adfA
                                </span>
                                <div className="mt-4 flex space-x-3 lg:mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Withdraw
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                    >
                                        Verify
                                    </a>
                                </div>
                            </div>
                        </Card>

                        <h1 className="text-3xl font-semibold mt-8 text-center ">
                            <span className="underline">Explore Features</span> 😎
                        </h1>

                        <div className="flex justify-center flex-wrap my-5">
                            <div className=" md:max-w-[550px] w-[90%] transition text-[#140f21] hover:ease-in-out hover:scale-105 bg-[#8585ff] border border-[#ffffff2e] p-4 mx-4 my-3 rounded-sm text-start">
                                <h2 className="text-xl font-semibold pb-2">
                                    <u>
                                        <Link href={"/dashboard/paylinks"}>Payment Links</Link>{" "}
                                    </u>
                                </h2>
                                <span className="">
                                    Start receiving payments using unique and personalized payment
                                    links and get paid in quickly
                                </span>
                            </div>

                            <div className=" md:max-w-[550px] w-[90%] transition text-[#140f21] hover:ease-in-out hover:scale-105 bg-[#8585ff] border border-[#ffffff2e] p-4 mx-4 my-3 rounded-sm text-start">
                                <h2 className="text-xl font-semibold pb-2">
                                    <u>
                                        <Link href={"/dashboard/verifywallet"}>
                                            Wallet Verification
                                        </Link>
                                    </u>
                                </h2>
                                <span className="">
                                    Verify any wallet using this feature and check if that wallet
                                    is compromised or not
                                </span>
                            </div>

                            <div className=" md:max-w-[550px] w-[90%] transition text-[#140f21] hover:ease-in-out hover:scale-105 bg-[#8585ff] border border-[#ffffff2e] p-4 mx-4 my-3 rounded-sm text-start">
                                <h2 className="text-xl font-semibold pb-2">
                                    <u>
                                        <Link href={"/dashboard/invest"}>Invest</Link>
                                    </u>
                                </h2>
                                <span className="">
                                    Invest the funds you receive directly through the platform in
                                    various ways
                                </span>
                            </div>


                            <div className=" md:max-w-[550px] w-[90%] transition text-[#140f21] hover:ease-in-out hover:scale-105 bg-[#8585ff] border border-[#ffffff2e] p-4 mx-4 my-3 rounded-sm text-start">
                                <h2 className="text-xl font-semibold pb-2">
                                    <u>
                                        <Link href={"/dashboard/verifywallet"}>
                                            Wallet Verification
                                        </Link>
                                    </u>
                                </h2>
                                <span className="">
                                    Verify any wallet using this feature and check if that wallet
                                    is compromised or not
                                </span>
                            </div>

                            <div className=" md:max-w-[550px] w-[90%] transition text-[#140f21] hover:ease-in-out hover:scale-105 bg-[#8585ff] border border-[#ffffff2e] p-4 mx-4 my-3 rounded-sm text-start">
                                <h2 className="text-xl font-semibold pb-2">
                                    <u>
                                        <Link href={"/dashboard/verifywallet"}>
                                            Wallet Verification
                                        </Link>
                                    </u>
                                </h2>
                                <span className="">
                                    Verify any wallet using this feature and check if that wallet
                                    is compromised or not
                                </span>
                            </div>


                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </div>
    );
}
