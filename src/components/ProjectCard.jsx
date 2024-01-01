import Image from 'next/image'
import React from 'react'
import SkillTablet from './SkillTablet'
import Link from 'next/link'

const ProjectCard = ({projectTitle, projectDesc, projectLink, projectImage, projectSkills}) => {
  return (
    <Link href={projectLink} className='projectCard flex gap-5 mt-2  border-none rounded-[20px]'>
        <div className='imgContainer flex-1 my-auto'>
            <Image src={projectImage} className='rounded-[20px] max-w-[200px]'/>
        </div>
        <div className='textContainer flex-2 flex flex-col w-9/12 my-auto py-2 pr-5'>
            <h3 className='text-xl font-semibold mb-2'>{projectTitle}</h3>
            <p className='text-sm mb-2'>{projectDesc}</p>
            <hr className='mb-3'/>
            <div className='flex flex-wrap gap-3'>
                {
                    projectSkills.map((skill, index) => (
                        <div key={index}><div className='iconCard inline-block'>{skill.icon}</div></div>
                        // <SkillTablet
                        //     key={index} 
                        //     // skillTitle={skill.title}
                        //     skillIcon={skill.icon}
                        // />
                    ))
                }
            </div>
        </div>
    </Link>
  )
}

export default ProjectCard