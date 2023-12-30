import Skillset from '@/components/Skillset';
import { skillSet } from '@/data/skillSet';
import React from 'react'
import { GiSecretBook } from 'react-icons/gi';

const Skills = () => {
  return (
    <div className='flex flex-col justify-start'>
        <div className=''>
            <h1 className='skillHeading text-4xl font-semibold text-center'>
                My Skill Book <GiSecretBook className='inline'/>
            </h1>
        </div>
        <div className=''>
          {
            skillSet.map((skill, index) => (
              <Skillset 
                key={index} 
                skillName={skill.title}
                skills={skill.skills}
                skillIcon={skill.icon}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Skills