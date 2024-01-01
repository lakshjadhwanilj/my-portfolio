import Link from 'next/link'
import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <div className='footer flex justify-between items-center mt-5 min-h-[60px] text-center py-[20px] text-sm tracking-wider'>
        <SocialLinks />
        <div className='text-center'>Made with ❤️ by Laksh Jadhwani using Next.js 14 and Tailwind CSS.</div>
    </div>
  )
}

export default Footer