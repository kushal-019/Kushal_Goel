import React from 'react'
import { PROJECTS } from '../data'

const Project = () => {

    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center text-left">
                        <div className="w-full lg:w-1/4" >
                            <img src={project.image} alt={project.title} className='mb-6 rounded h-[120px] w-[200px]' />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <div className="flex items-center">
                                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                                <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="ml-4 text-xs px-3 py-1 bg-purple-900 text-white rounded-md hover:bg-purple-800"
                                >
                                    Click Here
                                </a>
                            </div>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-purple-950 px-2 py-1 text-sm font-medium text-white-500'>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
