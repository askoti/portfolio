"use client"

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div>
      <div className="fixed top-0 right-0 z-20 w-full lg:hidden md:hidden flex justify-between items-center">
            <Image src='/web-design.png' width={40} height={40} className="p-0 m-4" alt="Image"/>
            <FaBars className="m-4 text-3xl cursor-pointer" onClick={() => toggleSidebar()}/>
      </div>  
      <div className={`${sidebar ? 'fixed top-0 right-0 z-20 w-2/3 h-full lg:hidden md:hidden bg-gray-900 bg-opacity-75 p-4 md:p-0 transition-all duration-300 ease-in-out' : 'fixed top-0 right-[-100%] z-20 w-2/3 h-full lg:hidden md:hidden bg-gray-900 bg-opacity-75 p-4 md:p-0 transition-all duration-300 ease-in-out'}`}>
            <FaTimes className="m-2 text-3xl cursor-pointer bg-transparent" onClick={() => toggleSidebar()}/>
            <ul className="text-center m-4 font-bold bg-transparent text-white">
                <li className="p-3 bg-transparent">About Me</li>
                <li className="p-3 bg-transparent">Skills</li>
                <li className="p-3 bg-transparent">Portfolio</li>
                <li className="p-3 bg-transparent">Contact</li>
            </ul>
      </div>
    </div>
  );
}
