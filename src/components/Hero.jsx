import React from 'react'
import { IoDocument } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { FaHandPeace } from "react-icons/fa6";
import Link from 'next/link';
import { EMAIL_ID, RESUME_LINK } from '@/data/constants';

const Hero = () => {
    return (
        <div className='hero flex flex-col md:flex-row gap-7 lg:gap-12'>
            <div className='textContainer flex-1 justify-center items-center md:my-auto'>
                <h3 className='subheading text-xl md:text-3xl lg:text-4xl font-semibold mb-3'>HELLO</h3>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold mb-3'>
                    I AM LAKSH <FaHandPeace className='inline mb-1' />
                </h1>
                <h4 className='text-xl md:text-2xl my-3'>Full Stack Web Developer | CS Graduate Student</h4>
                <p>I thrive on turning ideas into code, specializing in crafting seamless and intuitive solutions. Join me in exploring the ever-evolving world of technology—one line of code at a time.</p>
                <div className='flex justify-center md:justify-normal gap-5 my-5'>
                    <Link href={`mailto:${EMAIL_ID}`} target='_blank' className='btn py-3 px-3 min-w-[8rem] border-none rounded font-bold uppercase tracking-wider text-sm flex justify-center items-center gap-1'>
                        <AiTwotoneMail className='inline mb-1 text-lg'/> <span> Hire Me</span>
                    </Link>
                    <Link href={RESUME_LINK} target='_blank' className='btn-invert py-3 px-3 min-w-[8rem] border-none rounded font-bold uppercase tracking-wider text-sm flex justify-center items-center gap-1'>
                        <IoDocument className='inline mb-[0.125rem] text-lg' /> <span> Get Resume</span>
                    </Link>
                </div>
            </div>
            <div className='loffieContainer hidden md:block flex-1 relative md:max-h-80'>
                <dotlottie-player src="https://lottie.host/9a4e4694-752b-4050-99b1-2015db4b0c49/j2ymDfl3HM.json" background="transparent" speed="1" classname='object-cover' loop autoplay></dotlottie-player>
            </div>
        </div>
    )
}

export default Hero