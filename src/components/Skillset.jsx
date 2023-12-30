import React from 'react'

const Skillset = ({skillName, skillIcon, skills}) => {
  return (
    <div className='skillSet my-7 rounded-[10px] p-5'>
        <h1 className='skillTitle text-xl font-medium mb-3 tracking-wider'>{skillIcon} {skillName}</h1>
        <div className='skillSetCard grid grid-cols-5 gap-6'>
            {
                skills.map((skill, index) => 
                    (<div id={index} className='skillCard mt-3 flex items-center rounded-[10px] max-h-[40px] min-w-[70px] text-left px-3'>
                        <div className='iconCard rounded-lg inline-block p-3 font-bold'>{skill.icon}</div>
                        <div className='inline-block font-bold'>{skill.title}</div>
                    </div>)
                )
            }
        </div>
    </div>
  )
}

export default Skillset