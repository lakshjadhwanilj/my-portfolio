import React from 'react'
import SkillTablet from './SkillTablet'

const Skillset = ({skillSetTitle, skillSetIcon, skills, skillIndex}) => {
  return (
    <div className={`skillSet md:mx-2 lg:mx-6 mb-2 p-1 pb-4 ${skillIndex === 1 && 'row-span-2'}`}>
        <h1 className='skillTitle text-base font-medium mb-3 tracking-wider text-center'>{skillSetIcon} {skillSetTitle}</h1>
        <div className='skillSetCard flex flex-wrap gap-2'>
            {
                skills.map((skill, index) => (
                    <SkillTablet
                        key={index}
                        skillTitle={skill.title}
                        skillIcon={skill.icon}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Skillset