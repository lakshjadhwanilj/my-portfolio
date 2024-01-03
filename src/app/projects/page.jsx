import ProjectCard from '@/components/ProjectCard'
import Skillset from '@/components/Skillset'
import { projects } from '@/data/projects'
import { skillSet } from '@/data/skillSet'
import React from 'react'
import { FaCode } from 'react-icons/fa'
import { TbDeviceGamepad3 } from 'react-icons/tb'

const Page = () => {
  return (
    // <div className='flex gap-5'>
      <div className='projectContainer pt-4 px-5 rounded-[20px] flex flex-col justify-start'>
          <div className=''>
              <h1 className='projectHeading text-xl font-semibold text-center uppercase tracking-wider'>
                  <TbDeviceGamepad3 className='inline mb-1'/> Projects
              </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
            {
              projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  projectTitle={project.title}
                  projectDesc={project.description}
                  projectLink={project.link}
                  projectImage={project.image}
                  projectSkills={project.skills}
                />
                ))
              }
          </div>
      </div>
    // </div>
  )
}

export default Page