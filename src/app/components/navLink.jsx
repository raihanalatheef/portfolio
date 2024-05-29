"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ link }) => {
  const pathName = usePathname()
  return (
    <Link
      href={link.url}
      key={link.url}
      className={` p-1  ${
        link.url === pathName
          ? pathName == "/"
            ? "border-b-[3px] text-white"
            : "border-b-[3px] border-pink-600 text-pink-600"
          : pathName == "/"
          ? "text-white"
          : "text-pink-600"
      }`}
    >
      {link.title}
    </Link>
  )
}

export default NavLink
