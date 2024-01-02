'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='min-h-[5.5rem] flex items-center justify-between md:justify-center lg:justify-between z-10'>
            <Link href='/' className='logo text-2xl font-bold md:hidden lg:block'>Laksh Jadhwani</Link>
            <div className='navlink-container hidden md:block py-[10px] px-4 rounded-[40px]'>
                <NavLinks />
            </div>
            <button onClick={() => setOpen(prev => !prev)} className="md:hidden text-white">
                <BsFillMenuButtonWideFill className='text-2xl' />
            </button>
            {
                open && (<div className='sm-navlink-container md:hidden absolute top-[6rem] right-0 w-full h-[calc(100vh-12rem)] flex flex-col items-center justify-center gap-[10px]'>
                    <NavLinks />
                </div>)
            }
        </div>
    )
}

export default Navbar