import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../assets/data";


const Project = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-100px"
    });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const projectVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.08,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
            transition: {
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.1,
            backgroundColor: "#7e22ce",
            transition: {
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    };

    const techVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            y: 20
        },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }),
        hover: {
            scale: 1.15,
            y: -5,
            transition: {
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <motion.div
            className="border-b border-neutral-900 pb-20 relative"
            ref={sectionRef}
            style={{ opacity, scale }}
        >
            <motion.h2
                className="my-20 text-center text-4xl font-bold"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
                Projects
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-12 flex flex-wrap lg:justify-center text-left"
                        variants={projectVariants}
                        whileHover="hover"
                        custom={index}
                    >
                        <div className="w-full lg:w-1/4">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="mb-6 rounded-lg h-[120px] w-[200px] object-cover"
                                variants={imageVariants}
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <div className="flex items-center mb-3">
                                <h6 className="font-semibold text-lg">{project.title}</h6>
                                <motion.a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-4 text-xs px-4 py-2 bg-purple-900 text-white rounded-md shadow-sm"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    View Project
                                </motion.a>
                            </div>
                            <p className="mb-4 text-neutral-400 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className="rounded-full bg-purple-950 px-3 py-1 text-sm font-medium text-white shadow-sm"
                                        variants={techVariants}
                                        custom={techIndex}
                                        whileHover="hover"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Project;