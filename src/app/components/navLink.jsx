'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
    const pathName = usePathname();
    return (
        <Link href={link.url} key={link.url} className={`rounded p-1 ${link.url === pathName && "bg-black text-white"}`}>{link.title}</Link>
    )
}

export default NavLink