import { socials } from '@/data/socials'
import Link from 'next/link'
import React from 'react'
import { MdConnectWithoutContact } from 'react-icons/md'

const ContactCard = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-[50px]'>
        <div className='contactCard flex-1 justify-center  items-center my-auto rounded-[10px]'>
            <div className='grid grid-cols-1 p-6 gap-4'>
                <h3 className='text-2xl font-semibold'><MdConnectWithoutContact className='inline mb-1 ' /> Let's Connect</h3>
                {
                    socials.map((social, index) => (
                        <div key={index} className='contactLink rounded-xl p-2 '>
                            <div className="contactText text-xl flex items-center">
                                {
                                    social.clickable ? (
                                        <Link href={social.content} target="_blank" className=''>
                                            <span className='mr-5 ml-2 text-xl'>{social.icon}</span> {social.title}
                                        </Link>
                                    ) : (
                                        <p><span className='mr-5 ml-2 text-xl'>{social.icon}</span> {social.title}</p>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='loffieContainer flex-1 relative lg:max-h-[400px]'>
            <dotlottie-player src="https://lottie.host/9e732a6d-dd05-42b2-bb1a-2116c7e4cd77/sJt8IztTF6.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </div>
    </div>
  )
}

export default ContactCard