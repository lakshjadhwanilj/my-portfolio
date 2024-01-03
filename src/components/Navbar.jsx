'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className='min-h-[5.5rem] flex items-center justify-between md:justify-center lg:justify-between z-10'>
            <Link href='/' className='logo text-2xl font-bold md:hidden lg:block'>Laksh Jadhwani</Link>
            <NavLinks />
        </div>
    )
}

export default Navbar