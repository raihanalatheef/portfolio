"use client"
import { usePathname } from "next/navigation"
import Navbar from "./navbar"
import { AnimatePresence, motion } from "framer-motion"

const TransitionProvider = ({ items }) => {
  const pathName = usePathname()
  const isHome = pathName === "/" ? true : false
  const editedPath = isHome ? "Loading..." : pathName.substring(1)
  const bgTransition = isHome ? "bg-white" : "bg-pink-600"
  const bgContent = isHome ? "bg-pink-600" : "bg-white"
  const textColor = isHome ? "text-pink-600" : "text-white"

  return (
    // Mode wait is used to wait for first div animation to finish before starting the next
    <AnimatePresence mode="wait">
      <div key={pathName} className={`w-screen h-screen ${bgContent}`}>
        {/*These divs are added for transition between pages based on pathName value change*/}
        <motion.div
          className={`h-screen w-screen fixed ${bgTransition} rounded-b-[100px] z-40`}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`fixed m-auto top-0 bottom-0 left-0 right-0 ${textColor} text-8xl cursor-default z-50 w-fit h-fit capitalize font-Protest`}
          animate={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {editedPath}
        </motion.div>
        <motion.div
          className={`h-screen w-screen fixed ${bgTransition} rounded-t-[100px] z-30 bottom-0`}
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{items}</div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
