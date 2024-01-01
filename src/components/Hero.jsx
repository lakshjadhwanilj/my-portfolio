import React from 'react'
import { IoDocument } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { FaHandPeace } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className='hero flex flex-col lg:flex-row gap-[50px]'>
            <div className='textContainer flex-1 justify-center items-center my-auto'>
                <h3 className='subheading text-4xl font-semibold mb-3'>HELLO</h3>
                <h1 className='text-7xl font-semibold mb-3'>I AM LAKSH <FaHandPeace className='inline' /></h1>
                <h4 className='text-2xl my-3'>Full Stack Web Developer | CS Graduate Student</h4>
                <p>I thrive on turning ideas into code, specializing in crafting seamless and intuitive solutions. Join me in exploring the ever-evolving world of technology—one line of code at a time.</p>
                <div className='flex justify-center lg:justify-normal gap-5 my-5'>
                    <button className='btn py-3 px-3 min-w-[125px] border-none rounded font-bold uppercase tracking-wider text-sm'>
                        <AiTwotoneMail className='inline mb-[3px] text-lg'/> Hire Me
                    </button>
                    <button className='btn-invert py-3 px-3 min-w-[125px] border-none rounded font-bold uppercase tracking-wider text-sm'>
                        <IoDocument className='inline mb-1' /> Get Resume
                    </button>
                </div>
            </div>
            <div className='loffieContainer flex-1 relative lg:max-h-[400px]'>
                <dotlottie-player src="https://lottie.host/9a4e4694-752b-4050-99b1-2015db4b0c49/j2ymDfl3HM.json" background="transparent" speed="1" classname='object-cover' loop autoplay></dotlottie-player>
            </div>
        </div>
    )
}

export default Hero