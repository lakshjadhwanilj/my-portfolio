'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { TbDeviceGamepad3 } from "react-icons/tb";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { RESUME_LINK } from '@/data/constants';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';

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

    const [open, setOpen] = useState(false)
    const pathName = usePathname()

    return (
        <div>
            <div className='navlink-container hidden md:block py-[10px] px-4 rounded-[40px]'>
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
            <button onClick={() => setOpen(prev => !prev)} className="md:hidden text-white">
                <BsFillMenuButtonWideFill className='text-2xl' />
            </button>
            {
                open && (
                
                <div className='sm-navlink-container md:hidden absolute top-[5rem] right-0 w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center pb-10 gap-[10px]'>
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        {links.map((link => 
                            <Link href={link.path} key={link.title} className={`navlink min-w-[15rem] md:min-w-[6.25rem] py-[10px] px-[15px] rounded-[30px] font-medium text-center text-xl md:text-sm  ${pathName === link.path && 'active'}`} onClick={() => setOpen(prev => !prev)}>
                                {link.icon} {link.title}
                            </Link>    
                        ))}
                        <Link href={RESUME_LINK} target='_blank' className='navlink min-w-[15rem] md:min-w-[6.25rem] py-[10px] px-[15px] rounded-[30px] font-medium text-center text-xl md:text-sm' onClick={() => setOpen(prev => !prev)}>
                            <IoDocument className='inline text-md mb-1' /> Resume
                        </Link>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default NavLinks