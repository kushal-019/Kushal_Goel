import React from 'react'
import { HERO_CONTENT } from '../data';
import intro from "../intro.png";
import { FaDownload } from 'react-icons/fa';


const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Kushal Goel</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text teext-4xl tracking-tight text-transparent'>Full Stack Developer || Software Engineer</span>
                        {/* Download CV Link with icon */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1uTwI2YT75yrzOfrq-2lvOfYpoou_zIkX"
                            download="Kushal_Goel_CV"
                            className="flex items-center my-2 px-2 py-1 bg-purple-950 text-white rounded-lg hover:bg-purple-800 transition duration-300 ease-in-out"
                        >
                            <FaDownload className="mr-2" /> Download CV
                        </a>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-left">{HERO_CONTENT}</p>

                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className='h-[300px] lg:h-[400px]' src={intro} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero;
