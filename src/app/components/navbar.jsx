'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import NavLink from "./navLink"

const links = [
    { url:"/", title:"Home" },
    { url:"/about", title:"About" },
    { url:"/portfolio", title:"Portfolio" },
    { url:"/contact", title:"Contact" },
]

const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
            {/* Desktop links/menu */}
            <div className="text-black flex-row items-center justify-start gap-8 md:flex hidden w-1/3">
                {links.map(linkItem => ( <NavLink link={linkItem}/>))}
            </div>
            {/* Logo */}
            <div className="lg:flex w-1/3 lg:justify-center md:hidden">
                <Link href="/" className="text-sm bg-violet-600 rounded-md p-1">
                    <span className="text-white mr-2">Rainu</span>
                    <span className="text-black w-14 h-8 roundede bg-white">.dev</span>
                </Link>
            </div>
             {/* Social Desktop */}
            <div className="hidden md:flex gap-8 w-1/3 justify-end">
                <Link href="https://github.com/raihanalatheef" target="_blank">
                   <Image src="/github.png" alt="github-logo" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/raihanath-bindh-latheef-9b93ba9b/" target="_blank">
                   <Image src="/linkedin.png" alt="github-logo" width={24} height={24}/>
                </Link>
            </div>
            
            {/* Responsive menu */}
            <div className="md:hidden">
                <button className="flex flex-col justify-between w-10 h-8 z-50 relative" onClick={() => setOpen((prev) => !prev)}>
                    <div className="bg-black rounded h-1 w-10"></div>
                    <div className="bg-black rounded h-1 w-10"></div>
                    <div className="bg-black rounded h-1 w-10"></div>
                </button>
                {/* Menu List */}
                {open && ( 
                <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map(linkItem => ( <Link key={linkItem.url} href={linkItem.url}>{linkItem.title}</Link>))}
                </div>)}
            </div>
       
        
        </div>
    )
}

export default Navbar