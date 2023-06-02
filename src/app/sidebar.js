"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const scrollToSection = (sectionId, offset) => {
    const target = document.querySelector(sectionId);
    const targetPosition = target.offsetTop + offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setSidebar(false);
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 right-0 z-20 w-full lg:hidden md:hidden flex justify-between items-center">
        <Image src="/23.png" width={40} height={40} className="p-1 m-4 bg-white rounded" alt="Image" onClick={() => scrollToSection("#home", -150)}/>
        <FaBars className="m-4 text-3xl cursor-pointer" onClick={() => toggleSidebar()} />
      </div>
      <div
        ref={sidebarRef}
        className={`${
          sidebar
            ? "fixed top-0 right-0 z-20 w-2/3 h-full lg:hidden md:hidden bg-gray-950 bg-opacity-75 p-4 md:p-0 transition-all duration-300 ease-in-out"
            : "fixed top-0 right-[-100%] z-20 w-2/3 h-full lg:hidden md:hidden bg-gray-900 bg-opacity-75 p-4 md:p-0 transition-all duration-300 ease-in-out"
        }`}
      >
        <FaTimes className="m-2 text-3xl cursor-pointer bg-transparent" onClick={() => toggleSidebar()} />
        <ul className="text-center m-4 font-bold bg-transparent text-white">
          <li className="p-3 bg-transparent uppercase tracking-wider font-light" onClick={() => scrollToSection("#home", -150)}>
            Home
          </li>
          <li className="p-3 bg-transparent uppercase tracking-wider font-light" onClick={() => scrollToSection("#about", -100)}>
            About Me
          </li>
          <li className="p-3 bg-transparent uppercase tracking-wider font-light" onClick={() => scrollToSection("#portfolio", -80)}>
            Portfolio
          </li>
          <li className="p-3 bg-transparent uppercase tracking-wider font-light" onClick={() => scrollToSection("#contact", -50)}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
