
import React from 'react'
import { FaHandPeace } from 'react-icons/fa';
import Image from 'next/image';
import { IoLogoFreebsdDevil } from 'react-icons/io';
import LakshImage from '../../public/laksh.webp';

const Quote = () => {
  return (
    <div className="quote grid md:grid-cols-3 py-5 lg:py-10 rounded-[10px]">
        <div className="col-span-1 px-6 mx-auto">
            <Image src={LakshImage} alt="Laksh Jadhwani" className="rounded-full min-w-[200%] md:h-auto md:min-w-[75%] border-2 md:border-4 border-white" />
        </div>
        <div className="col-span-2 py-2 px-5 lg:px-12 rounded-3xl ">
            <h3 className='aboutHeading text-2xl font-semibold mb-2'> <IoLogoFreebsdDevil className='inline mb-1' /> About Me</h3>
            <p className="text-lg text-justify">
                Hello! <FaHandPeace className='inline' /> {"My name is Laksh Jadhwani, a Computer Science graduate student with a passion for crafting innovative solutions. I am a former Consultant at LTIMindtree. "}
                <br /><br />
                {"My goal is to merge creativity and technology, enhancing user experiences through full-stack development. Motivated by continuous learning, I thrive on challenges and contribute to projects with a collaborative spirit. Beyond code, I'm driven by the desire to create meaningful solutions that positively impact lives."}
            </p>
        </div>
    </div>
  )
}

export default Quote