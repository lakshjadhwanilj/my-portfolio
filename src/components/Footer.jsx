import Link from 'next/link'
import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <div className='footer flex flex-col md:flex-row justify-between items-center mt-5 min-h-14 text-center py-5 text-sm tracking-wider'>
        <SocialLinks />
        <div className='text-center'>Made with ❤️ by Laksh Jadhwani<span className='hidden md:inline'> using Next.js 14 and Tailwind CSS</span>.</div>
    </div>
  )
}

export default Footer