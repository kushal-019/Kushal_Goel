import React from 'react'
import { SERVICES } from '../data'

const Services = () => {
    return (
        <div className="border-b pb-24 border-neutral-800">
            <h1 className="my-20 text-center text-4xl">Services</h1>
            <div>
                {SERVICES.map((services, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center text-left">
                        <div className="w-full max-w-xl lg:w-3/4">
                        <h2 className='mb-2 font-bold'>
                            {services.role}
                            </h2>
                            <p className='mb-4 text-neutral-400'>{services.description}</p>
                            {services.technologies.map((service , index)=>(
                                <span key={index}className='mr-2 rounded bg-purple-950 px-2 py-1 text-sm font-medium text-white-500'>{service}</span>
                            ))}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services

