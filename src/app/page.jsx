"use client"

import Image from "next/image"

import { motion } from "framer-motion"

const tickerVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
}

const Homepage = () => {
  const skillsText =
    "SHOPIFY - SANITY - WORDPRESS - REACT - NEXTJS - SHOPIFY 2.0 - NETLIFY - TAILWINDCSS - "
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row h-full lg:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 relative">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M21,-25C32.2,-20.8,49.8,-21.3,58.6,-14.3C67.3,-7.3,67.3,7.3,59.6,15.8C51.9,24.4,36.6,26.9,25.4,35.3C14.2,43.8,7.1,58.2,-5.7,66C-18.5,73.8,-37,75.1,-45.3,65.7C-53.5,56.3,-51.6,36.2,-56.8,18.8C-62,1.4,-74.3,-13.4,-74.9,-28.2C-75.4,-43,-64.1,-57.8,-49.6,-61.1C-35.2,-64.3,-17.6,-56,-6.4,-47.2C4.9,-38.5,9.8,-29.3,21,-25Z"
              transform="translate(100 100)"
            />
          </svg> */}
          {/* <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFD6E8"
              d="M25.5,-23.1C39.5,-18.8,61.4,-16.7,71.5,-5.8C81.6,5.2,79.9,25.2,70.4,39.8C61,54.5,43.8,63.9,26,69.4C8.2,75,-10.2,76.8,-29,72.9C-47.8,69,-66.9,59.3,-67.4,45.3C-67.9,31.3,-49.6,12.9,-39.4,-0.3C-29.1,-13.4,-26.8,-21.3,-21.6,-27.2C-16.4,-33,-8.2,-36.7,-1.2,-35.3C5.8,-33.9,11.6,-27.4,25.5,-23.1Z"
              transform="translate(100 100)"
            />
          </svg> */}
        </div>
        <div className="hidden h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-Protest">
            Front end developer
          </h1>

          <p className="md:text-xl">Welcome to my digital canvas</p>
          <div className="flex gap-4">
            <button className="p-4 rounded-lg ring-black ring-1 bg-black text-white">
              View my work
            </button>
            <button className="p-4 rounded-lg ring-black ring-1 bg-white text-black">
              Contact me
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0">
        <motion.h1
          initial={{ y: 0 }}
          animate={{
            y: [0, 500, -500, 0],
            transition: {
              delay: 2,
              duration: 2, // Total duration for all steps
              type: "spring",
              stiffness: 50,
            },
          }}
          className="font-Protest text-white text-hero"
        >
          Frontend developer
        </motion.h1>
        <div className="overflow-hidden whitespace-nowrap flex items-center justify-center ">
          <motion.div
            className="track"
            variants={tickerVariants}
            animate="animate"
          >
            <p className="font-Prism text-white text-8xl inline-block">
              {skillsText}&nbsp;{skillsText}
            </p>
          </motion.div>
        </div>
        {/* <Image
          src="/1000083718.png"
          fill
          alt="Raihana image"
          className="object-contain"
        /> */}
      </div>
    </motion.div>
  )
}

export default Homepage
