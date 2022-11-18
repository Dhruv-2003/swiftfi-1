import React from 'react'
import styles from '../styles/SwiftPay.module.css'
import { Button } from "flowbite-react";

export default function SwiftPay() {
  return (
    <div>
       <div className={`${styles.payCard}`}>
        <div className="flex flex-col  w-[300px] h-[300px] bg-gray-100 flex-wrap justify-center items-center px-6 py-4 rounded-md">
          <h1 className="text-black">Select Payment Option</h1>

          <Button className="w-[130px] py3 my-3">Pay Now</Button>

          <Button className="w-[130px] py3 my-3">Pay Later</Button>

          <Button className="w-[130px] py3 my-3">Pay in Stream</Button>
        </div>
      </div>
    </div>
  )
}
