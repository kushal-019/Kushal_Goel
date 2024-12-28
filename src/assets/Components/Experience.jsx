import React from 'react'
import { EXPERIENCES } from '../data'

const Experience = () => {
    return (
        <div className="border-b pb-24 border-neutral-800">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="">{experience.year}</p></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience

