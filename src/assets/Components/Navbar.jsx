import React from 'react';
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <p className="mx-2 size-18">KG</p>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                
                {/* Social Media Links */}
                <a href="https://www.linkedin.com/in/kushal-goel-b8a578270/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/kushal-019" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.geeksforgeeks.org/user/kushal_019/" target="_blank" rel="noopener noreferrer">
                    <SiGeeksforgeeks />
                </a>
                <a href="https://leetcode.com/u/kushal_019/" target="_blank" rel="noopener noreferrer">
                    <TbBrandLeetcode />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
