import React from 'react'

const SkillTablet = ({skillTitle, skillIcon}) => {
  return (
    
        <div className='skillCard flex gap-1 justify-center items-center rounded-[10px] max-h-[30px] w-fit text-left font-semibold p-2'>
            <div className='iconCard rounded-lg inline-block'>{skillIcon}</div>
            <div className='inline-block text-sm font-mono'>{skillTitle}</div>
        </div>
    
  )
}

export default SkillTablet