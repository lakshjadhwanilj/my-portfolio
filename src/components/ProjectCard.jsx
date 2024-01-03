import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ProjectCard = ({projectTitle, projectDesc, projectLink, projectImage, projectSkills}) => {
  return (
    <Link href={projectLink} className='projectCard flex flex-col xl:flex-row gap-5 mt-2 border-none rounded-[1.25rem]'>
        <div className='imgContainer flex-1 my-auto'>
            <Image src={projectImage} className='rounded-[1.25rem] md:max-w-[18rem] lg:max-w-[12.5rem]' alt={projectTitle} />
        </div>
        <div className='textContainer flex-2 flex flex-col md:max-w-[25rem] lg:w-9/12 my-auto py-2 md:pr-5'>
            <h3 className='text-xl font-semibold mb-2'>{projectTitle}</h3>
            <p className='text-sm mb-2'>{projectDesc}</p>
            <hr className='mb-3'/>
            <div className='flex flex-wrap gap-3'>
                {
                    projectSkills.map((skill, index) => (
                        <div key={index}><div className='iconCard inline-block'>{skill.icon}</div></div>
                    ))
                }
            </div>
        </div>
    </Link>
  )
}

export default ProjectCard