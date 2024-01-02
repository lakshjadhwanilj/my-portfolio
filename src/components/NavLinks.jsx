'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { TbDeviceGamepad3 } from "react-icons/tb";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { RESUME_LINK } from '@/data/constants';

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
]

const NavLinks = () => {
    const pathName = usePathname()

    return (
        <div>
            <div className='flex flex-col md:flex-row items-center gap-3'>
                {links.map((link => 
                // lg:min-w-[6.25rem]
                    <Link href={link.path} key={link.title} className={`navlink min-w-[15rem] md:min-w-[6.25rem] py-[10px] px-[15px] rounded-[30px] font-medium text-center text-xl md:text-sm  ${pathName === link.path && 'active'}`}>
                        {link.icon} {link.title}
                    </Link>    
                ))}
                <Link href={RESUME_LINK} target='_blank' className='navlink min-w-[15rem] md:min-w-[6.25rem] py-[10px] px-[15px] rounded-[30px] font-medium text-center text-xl md:text-sm'>
                    <IoDocument className='inline text-md mb-1' /> Resume
                </Link>
            </div>
        </div>
    )
}

export default NavLinks