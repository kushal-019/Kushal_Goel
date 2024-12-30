import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
    const socialIconsVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1 
            }
        }
    };

    const iconVariant = {
        initial: { opacity: 0, y: -20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: { 
            scale: 1.2,
            transition: { duration: 0.2 }
        }
    };

    const logoVariant = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.5,
                ease: [0.6, 0.01, 0.05, 0.95] // Corrected easing
            }
        }
    };

    const letterVariant = {
        initial: { y: 20, opacity: 0 },
        animate: { 
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.6, 0.01, 0.05, 0.95] // Corrected easing
            }
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <motion.div 
                className='flex flex-shrink-0 items-center'
                variants={logoVariant}
                initial="initial"
                animate="animate"
                whileHover="hover"
            >
                <motion.div 
                    className="relative flex items-center justify-center rounded-lg bg-purple-900 px-4 py-2 shadow-lg"
                    whileHover={{
                        boxShadow: "0 8px 15px rgba(124, 58, 237, 0.2)",
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.span 
                        className="relative text-2xl font-bold text-white"
                        variants={letterVariant}
                        initial="initial"
                        animate="animate"
                        style={{ display: "inline-block" }}
                    >
                        K
                    </motion.span>
                    <motion.span 
                        className="relative ml-1 text-2xl font-bold text-purple-300"
                        variants={letterVariant}
                        initial="initial"
                        animate="animate"
                        style={{ display: "inline-block" }}
                    >
                        G
                    </motion.span>
                    <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-purple-500"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                    />
                </motion.div>
            </motion.div>

            <motion.div 
                className='m-8 flex items-center justify-center gap-4 text-2xl'
                variants={socialIconsVariants}
                initial="initial"
                animate="animate"
            >
                <motion.a 
                    href="https://www.linkedin.com/in/kushal-goel-b8a578270/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariant}
                    whileHover="hover"
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a 
                    href="https://github.com/kushal-019" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariant}
                    whileHover="hover"
                >
                    <FaGithub />
                </motion.a>
                <motion.a 
                    href="https://www.geeksforgeeks.org/user/kushal_019/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariant}
                    whileHover="hover"
                >
                    <SiGeeksforgeeks />
                </motion.a>
                <motion.a 
                    href="https://leetcode.com/u/kushal_019/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariant}
                    whileHover="hover"
                >
                    <TbBrandLeetcode />
                </motion.a>
            </motion.div>
        </nav>
    );
}

export default Navbar;
