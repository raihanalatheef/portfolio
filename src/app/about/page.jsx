"use client"

import { motion, useScroll } from "framer-motion"
import Brain from "../components/brain"
import { useRef } from "react"

const AboutPage = () => {
  // useRef is used to reference the scroll container to undertand the scroll position to be used with the side svg

  const containerRef = useRef()

  const { scrollYProgress } = useScroll({ container: containerRef })
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 lg:w-2/3 lg:pr-0 xl:w-1/2 md:gap-32 lg:gap-48 xl:gap-64">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">lorem ipsum lorem ipsum</p>
            <div className="">
              <svg></svg>
            </div>
          </div>
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                SASS/SCSS
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                Shopify Liquid
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                ReactJs
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                NextJs
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                Typescript
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            <div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="bg-white p-4 font-semibold rounded-b-lg rounded-s-lg">
                    Front end developer
                  </div>
                  <div className="p-3 text-sm italic">current employment</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - present
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Flight
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-cyan-800 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-pink-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-cyan-800 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-pink-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 ">
                  <div className="bg-white p-4 font-semibold rounded-b-lg rounded-s-lg">
                    Front end developer
                  </div>
                  <div className="p-3 text-sm italic">current employment</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - present
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Flight
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="bg-white p-4 font-semibold rounded-b-lg rounded-s-lg">
                    FRont end developer
                  </div>
                  <div className="p-3 text-sm italic">current employment</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - present
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Flight
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-cyan-800 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-pink-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-cyan-800 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-pink-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 ">
                  {" "}
                  <div className="bg-white p-4 font-semibold rounded-b-lg rounded-s-lg">
                    FRont end developer
                  </div>
                  <div className="p-3 text-sm italic">current employment</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - present
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Flight
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 top-0 z-30 xl:w-1/2 sticky">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}
export default AboutPage
