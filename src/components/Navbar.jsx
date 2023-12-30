import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <div className='min-h-[90px] flex items-center justify-between z-10'>
            <Link href='/' className='logo text-2xl font-bold'>Laksh Jadhwani</Link>
            <div className='navlink-container py-[10px] px-4 rounded-[40px]'>
                <NavLinks />
            </div>
        </div>
    )
}

export default Navbar