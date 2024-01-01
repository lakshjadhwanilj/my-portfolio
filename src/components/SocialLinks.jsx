import { socials } from '@/data/socials'
import Link from 'next/link'
import React from 'react'

const SocialLinks = () => {
  return (
    <div className='flex gap-4'>
        {
            socials.map((social, index) => 
                social.clickable ? (
                    <div key={index} className='socialLink rounded-full py-1 px-2 text-center'>
                        <Link href={social.content} target='_blank' className='text-lg'>{social.icon}</Link>
                    </div>
                ) : (<div></div>)
            )
        }
    </div>
  )
}

export default SocialLinks