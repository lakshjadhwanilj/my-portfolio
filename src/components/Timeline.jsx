import React from 'react'
import { FaArrowTrendUp, FaLocationCrosshairs } from 'react-icons/fa6'
import { GiJourney } from "react-icons/gi"
import { MdSportsScore } from "react-icons/md"

const timeStamps = ['Aug 2017', 'June 2021', 'Aug 2023', 'May 2025']

const timeline = [
    {
        title: "Bachelor of Engineering, Computer Engineering",
        organization: "University of Mumbai - TSEC",
        location: "Mumbai | India",
        description: "8.55 / 10.0 CGPA"
    },
    {
        title: "Consultant",
        organization: "LTI Mindtree",
        location: "Mumbai | India",
        description: "Executed and developed over 50 changes to reports and forms by leveraging the capabilities of JD Edwards EnterpriseOne."
    },
    {
        title: "Master of Science, Computer Science",
        organization: "California State University, Long Beach",
        location: "Long Beach | CA",
        description: "3.67 / 4.0 GPA"
    },
    
]

const Timeline = () => {
  return (
    <div className='my-7 py-2'>
        <div>
            <h3 className='timeHeading text-center text-2xl font-semibold mb-2'> <GiJourney className='inline mb-1' /> My Journey</h3>
        </div>
        <div className='timeContainer flex justify-between my-3'>
            {
                timeStamps.map((time, index) => (
                    <span key={index} className='timeEvent font-semibold'><FaArrowTrendUp className='inline mb-1' /> &nbsp; {time}</span>
                )) 
            }
        </div>
        <div className='grid grid-cols-3 gap-5'>
            {
                timeline.map((timeEvent, index) => (
                    <div key={index} className='timeEventContainer'>
                        <h2 className='p-1 text-lg font-bold'>{timeEvent.organization}</h2>
                        <hr />
                        <h3 className='p-1 text-sm font-semibold italic'>{timeEvent.title}</h3>
                        <p className='p-1 text-base font-semibold'><FaLocationCrosshairs className='inline mb-1 font-bold' /> {timeEvent.location}</p>
                        <p className='p-1 text-sm font-medium'><MdSportsScore className='inline mb-1 text-lg font-semibold' /> {timeEvent.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Timeline