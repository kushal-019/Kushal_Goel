import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../data';
import aboutimage from "../aboutimage.png";

const About = () => {
    const headingVariants = {
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

    const textVariants = {
        initial: { opacity: 0, x: 50 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 0.8,
                delay: 0.3 
            }
        }
    };

    return (
        <motion.div 
            className='border-b border-neutral-900 pb-4'
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h1 
                className="my-20 text-center text-4xl"
                variants={headingVariants}
            >
                About 
                <span className='text-neutral-500'>Me</span>
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img 
                            className="rounded-2xl h-[350px]" 
                            src={aboutimage} 
                            alt=""
                            variants={imageVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-left">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p 
                            className='my-2 max-w-xl py-6'
                            variants={textVariants}
                        >
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;