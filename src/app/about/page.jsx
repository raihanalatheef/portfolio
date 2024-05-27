"use client"

import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          <div className="flex flex-col gap-12 justify-center">
            <h1>BIOGRAPHY</h1>
            <p>lorem ipsum lorem ipsum</p>
            <div className="">
              <svg></svg>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </motion.div>
  )
}
export default AboutPage
