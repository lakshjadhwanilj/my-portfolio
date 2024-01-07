import Skillset from '@/components/Skillset';
import { skillSet } from '@/data/skillSet';
import React from 'react'
import { FaCode } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='flex flex-col justify-start'>
        <div className=''>
            <h1 className='skillHeading text-2xl font-semibold text-center'>
                <FaCode className='inline'/> Skills
            </h1>
        </div>
        <div className='skillContainer grid grid-cols-1 md:grid-cols-2 '>
          {
            skillSet.map((skillGroup, index) => (
              <Skillset 
                key={index}
                skillIndex={index}
                skillSetTitle={skillGroup.title}
                skillSetIcon={skillGroup.icon}
                skills={skillGroup.skills}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Skills