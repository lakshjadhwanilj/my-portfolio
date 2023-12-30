'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { TbDeviceGamepad3 } from "react-icons/tb";
import { IoLogoFreebsdDevil } from "react-icons/io";

const links = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome className='inline text-md mb-1' />,
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <FaCode className='inline text-md mb-1' />,
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <TbDeviceGamepad3 className='inline text-md mb-1' />,
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoLogoFreebsdDevil className='inline text-md mb-1' />,
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <IoDocument className='inline text-md mb-1' />,
    },
]

const NavLinks = () => {
    const pathName = usePathname()

    return (
        <div>
            <div className='flex items-center gap-3'>
                {links.map((link => 
                    <Link href={link.path} key={link.title} className={`navlink min-w-[100px] py-[10px] px-[15px] rounded-[30px] font-medium text-center text-sm text-gray-300 ${pathName === link.path && 'active'}`}>
                        {link.icon} {link.title}
                    </Link>    
                ))}
            </div>
        </div>
    )
}

export default NavLinks