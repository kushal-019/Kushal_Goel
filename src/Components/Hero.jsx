import React from 'react';
import { motion } from 'framer-motion';
import intro from "../assets/intro.png";
import { FaDownload } from 'react-icons/fa';
import { HERO_CONTENT } from '../assets/data';

const Hero = () => {
    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const imageVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            className='border-b border-neutral-900 pb-4 lg:mb-35'
            initial="initial"
            animate="animate"
        >
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
                            variants={textVariants}
                        >
                            Kushal Goel
                        </motion.h1>

                        <motion.span
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text teext-4xl tracking-tight text-transparent'
                            variants={textVariants}
                            transition={{ delay: 0.2 }}
                        >
                            Full Stack Developer || Software Engineer
                        </motion.span>

                        <motion.a
                            href="https://drive.google.com/uc?export=download&id=1uTwI2YT75yrzOfrq-2lvOfYpoou_zIkX"
                            download="Kushal_Goel_CV"
                            className="flex items-center my-2 px-2 py-1 bg-purple-950 text-white rounded-lg hover:bg-purple-800 transition duration-300 ease-in-out"
                            variants={buttonVariants}
                            whileHover="hover"
                            transition={{ delay: 0.4 }}
                        >
                            <FaDownload className="mr-2" /> Download CV
                        </motion.a>

                        <motion.p
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-left"
                            variants={textVariants}
                            transition={{ delay: 0.6 }}
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            className='h-[300px] lg:h-[400px]'
                            src={intro}
                            alt=""
                            variants={imageVariants}
                            transition={{ delay: 0.4 }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;