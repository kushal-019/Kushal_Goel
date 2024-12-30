import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiPostman } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaLinux, FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const TechStacks = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("tech-stacks");
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        setTriggerAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconStyles = "text-7xl";

  const getRandomInitial = () => ({
    x: (Math.random() - 0.5) * 1000,
    y: (Math.random() - 0.5) * 1000,
    opacity: 0,
    scale: 0
  });

  const firstRowIcons = [
    { Icon: RiReactjsLine, color: "text-cyan-400" },
    { Icon: FaNodeJs, color: "text-green-500" },
    { Icon: SiMongodb, color: "text-green-600" },
    { Icon: SiExpress, color: "text-gray-400" },
    { Icon: IoLogoFirebase, color: "text-yellow-500" },
    { Icon: SiRedux, color: "text-purple-500" }
  ];

  const secondRowIcons = [
    { Icon: RiTailwindCssFill, color: "text-sky-400" },
    { Icon: FaGitAlt, color: "text-orange-500" },
    { Icon: FaLinux, color: "text-yellow-600" },
    { Icon: FaJava, color: "text-red-600" },
    { Icon: TbBrandCpp, color: "text-blue-500" },
    { Icon: IoLogoJavascript, color: "text-yellow-400" },
    { Icon: SiPostman, color: "text-orange-400" }
  ];

  const IconComponent = ({ Icon, color, index }) => {
    return (
      <motion.div
        className="rounded-2xl border-4 border-neutral-800 p-4"
        initial={getRandomInitial()}
        animate={
          triggerAnimation
            ? {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
              }
            : {}
        }
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: "easeOut"
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        <Icon className={`${iconStyles} ${color}`} />
      </motion.div>
    );
  };

  return (
    <div id="tech-stacks" className="border-b pb-24 border-neutral-800">
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Technologies
      </motion.h1>

      <div>
        {/* First row of icons */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {firstRowIcons.map(({ Icon, color }, index) => (
            <IconComponent key={index} Icon={Icon} color={color} index={index} />
          ))}
        </div>

        {/* Second row of icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
          {secondRowIcons.map(({ Icon, color }, index) => (
            <IconComponent
              key={index}
              Icon={Icon}
              color={color}
              index={index + firstRowIcons.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
