import React from "react";
import styles from "../../styles/Home.module.css";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import DashboardLayout from "../../components/DashboardLayout.jsx";

export default function Paypage() {
    const [toggle, setToggle] = useState(false);
    const cancelButtonRef = useRef(null);
    return (
        <DashboardLayout>
            <div className="w-[90%] mx-auto pt-20">
                <div className={`${styles.animation} flex flex-col justify-start pt-5`}>
                    <h1 className="text-3xl font-semibold pb-6">
                        Create and Manage Payment Links
                    </h1>

                    <div
                        className={`${styles.gradient} flex justify-start flex-col w-full `}
                    >
                        {/* <h1 className="text-2xl text-white font-semibold py-2 pl-9">
            gm Kushagra!!! welcome to your personalized SwiftFi dashboard 🚀
          </h1> */}

                        <div className="py-4 flex flex-wrap justify-center items-center ">
                            <button
                                className={`${styles.btnPrimary}`}
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                            >
                                Create a new payment page
                            </button>
                        </div>
                    </div>
                </div>
                <Transition.Root show={toggle} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        initialFocus={cancelButtonRef}
                        onClose={setToggle}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity bg-[#0c0c1764] backdrop-blur-[6px]" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 sm:pl-0">
                                            <div className="sm:flex sm:items-start ">
                                                {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div> */}
                                                <div className="mt-3 flex flex-col justify-center items-center text-center sm:mt-0 sm:ml-4 w-full sm:text-left">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-medium leading-6 mr-auto pl-4 text-gray-900 px-2"
                                                    >
                                                        Enter Details
                                                    </Dialog.Title>
                                                    <div className="flex flex-row  flex-wrap justify-center items-center p-2 text-sm mt-2  text-gray-500">
                                                        {/* title */}
                                                        <div className="w-full mt-3 flex flex-wrap items-center justify-between ">
                                                            <label className="p-3" htmlFor="">
                                                                Page Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="Page title..."
                                                                required
                                                            />
                                                        </div>

                                                        {/* description */}
                                                        <div className="w-full mt-3 flex flex-wrap items-start justify-between">
                                                            <label htmlFor="message" className="p-3">
                                                                Page Description
                                                            </label>
                                                            <textarea
                                                                id="message"
                                                                rows="2"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="Page Description..."
                                                            ></textarea>
                                                        </div>

                                                        {/* mail */}
                                                        <div className="w-full mt-3 flex flex-wrap items-start justify-between">
                                                            <label className="p-3" htmlFor="">
                                                                Contact Details
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="amount"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="Enter your email..."
                                                                required
                                                            />
                                                        </div>

                                                        {/* amount */}
                                                        <div className="w-full mt-3 flex flex-wrap items-start justify-between">
                                                            <label htmlFor="message" className="p-3">
                                                                Amount
                                                            </label>
                                                            <input
                                                                type="number"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="Enter amount to receive..."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className={` mr-2 w-full inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
                                                // "inline-flex w-full justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => console.log("working ")}
                                            >
                                                Create
                                            </button>
                                            <button
                                                type="button"
                                                className={`mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
                                                // mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                                                onClick={() => {
                                                    setToggle(!toggle);
                                                }}
                                                ref={cancelButtonRef}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>
        </DashboardLayout>
    );
}
