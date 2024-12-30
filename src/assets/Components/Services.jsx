import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data';

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const serviceVariants = {
        hidden: { 
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const tagVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div 
            className="border-b pb-24 border-neutral-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h1 
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6 }
                }}
                viewport={{ once: true }}
            >
                Services
            </motion.h1>
            <div>
                {SERVICES.map((services, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-8 flex flex-wrap lg:justify-center text-left"
                        variants={serviceVariants}
                    >
                        <motion.div 
                            className="w-full max-w-xl lg:w-3/4"
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.h2 
                                className='mb-2 font-bold'
                                variants={serviceVariants}
                            >
                                {services.role}
                            </motion.h2>
                            <motion.p 
                                className='mb-4 text-neutral-400'
                                variants={serviceVariants}
                            >
                                {services.description}
                            </motion.p>
                            <motion.div
                                variants={serviceVariants}
                                className="flex flex-wrap gap-2"
                            >
                                {services.technologies.map((service, index) => (
                                    <motion.span 
                                        key={index}
                                        className='rounded bg-purple-950 px-2 py-1 text-sm font-medium text-white-500'
                                        variants={tagVariants}
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "#581c87",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {service}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Services;