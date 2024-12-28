import React from 'react'
// import logo  from asserts
import { FaLinkedin, FaGithub, FaInstagram, } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <p className="mx-2 size-18">KG</p>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <TbBrandLeetcode />
            </div>
        </nav>



    )
}

export default Navbar
