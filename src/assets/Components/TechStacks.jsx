import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiPostman } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaLinux, FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const TechStacks = () => {
  const iconStyles = "text-7xl transition-transform transform hover:scale-110";

  return (
    <div className="border-b pb-24 border-neutral-800">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div>
        {/* First row of icons */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className={`${iconStyles} text-cyan-400`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className={`${iconStyles} text-green-500`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className={`${iconStyles} text-green-600`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className={`${iconStyles} text-gray-400`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoFirebase className={`${iconStyles} text-yellow-500`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiRedux className={`${iconStyles} text-purple-500`} />
          </div>
        </div>
        {/* Second row of icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className={`${iconStyles} text-sky-400`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitAlt className={`${iconStyles} text-orange-500`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLinux className={`${iconStyles} text-yellow-600`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className={`${iconStyles} text-red-600`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandCpp className={`${iconStyles} text-blue-500`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className={`${iconStyles} text-yellow-400`} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostman className={`${iconStyles} text-orange-400`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
