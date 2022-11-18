import React from 'react'
import { Fragment, useRef, useState, useEffect } from "react";

import styles from '../styles/SwiftPay.module.css'
import { Button } from "flowbite-react";
import { Dialog, Transition } from '@headlessui/react';

export default function SwiftPay() {
  const [toggle, setToggle] = useState(false);
  const cancelButtonRef = useRef(null);


  return (
    <div>
       <div className={`${styles.payCard}`}>
        <div className="flex flex-col  w-[300px] h-[300px] bg-gray-100 flex-wrap justify-center items-center px-6 py-4 rounded-md">
          <h1 className="text-black">Select Payment Option</h1>

          <Button 
          onClick={() => {
            setToggle(!toggle);
          }}
          className="w-[130px] py3 my-3">Pay Now</Button>

          <Button className="w-[130px] py3 my-3">Pay Later</Button>

          <Button className="w-[130px] py3 my-3">Pay in Stream</Button>
        </div>
      </div>


          {/* pay now modal */}
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
              <div className="fixed inset-0 bg-gray-500 bg-[#0c0c1764] bg-opacity-75 transition-opacity backdrop-blur-[1px]" />
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
                            <div className="w-full mt-3 flex flex-wrap items-center justify-between ">
                              <label className="p-3" htmlFor="">
                                Address
                              </label>
                              <input
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Payers address .."
                                required
                                onChange={(e) => {
                                  setPayerAddress(e.target.value);
                                }}
                              />
                            </div>
                            {/* name */}
                            <div className="w-full mt-3 flex flex-wrap items-center justify-between ">
                              <label className="p-3" htmlFor="">
                                Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Payers Name .."
                                required
                                onChange={(e) => {
                                  setPayerName(e.target.value);
                                }}
                              />
                            </div>
                            {/* amount */}
                            <div className="w-full mt-3 flex flex-wrap items-start justify-between">
                              <label className="p-3" htmlFor="">
                                Amount
                              </label>
                              <input
                                type="number"
                                id="amount"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Amount..."
                                required
                                onChange={(e) => {
                                  setAmount(e.target.value);
                                }}
                              />
                            </div>
                            {/* note */}
                            <div className="w-full mt-3 flex flex-wrap items-start justify-between">
                              <label htmlFor="message" className="p-3">
                                Note
                              </label>
                              <textarea
                                id="message"
                                rows="2"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                                onChange={(e) => {
                                  setMessage(e.target.value);
                                }}
                              ></textarea>
                            </div>
                            {/* date */}
                            {/* <div className="w-full mt-3 flex flex-wrap items-start justify-between">
                              <label htmlFor="message" className="p-3">
                                Date
                              </label>
                              <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                  <svg
                                    // aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <input
                                  // datepicker
                                  datepicker-format="mm/dd/yyyy"
                                  type="date"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-72"
                                  placeholder="Select date"
                                />
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className={` mr-2 w-full inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
                        // "inline-flex w-full justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => uploadData()}
                      >
                        Save
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
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
    </div>
  )
}
