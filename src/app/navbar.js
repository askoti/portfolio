"use client"

import Image from "next/image";

export default function Navbar() {
  const scrollToSection = (sectionId, offset) => {
    const target = document.querySelector(sectionId);
    const targetPosition = target.getBoundingClientRect().top;
    const offsetPosition = targetPosition + window.pageYOffset + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full h-24 py-5 mx-auto lg:flex md:flex hidden flex-row justify-between fixed top-0 right-0 z-20" style={{ backgroundColor: "#06060A" }}>
      <div>
        <ul className="flex flex-row justify-between items-center">
          <li className="p-2 ml-14 mr-10 cursor-pointer bg-white rounded">
            <Image src="/23.png" className=" filter brightness-0 contrast-200 bg-transparent" width={40} height={40} alt="Image" onClick={() => scrollToSection("#home", -150)}/>
          </li>
          <li className="p-3 cursor-pointer tracking-wider uppercase font-light">
            <a onClick={() => scrollToSection("#home", -150)}>Home</a>
          </li>
          <li className="p-3 cursor-pointer tracking-wider uppercase font-light">
            <a onClick={() => scrollToSection("#about", -100)}>About Me</a>
          </li>
          <li className="p-3 cursor-pointer tracking-wider uppercase font-light">
            <a onClick={() => scrollToSection("#portfolio", -80)}>Portfolio</a>
          </li>
          <li className="p-3 cursor-pointer tracking-wider uppercase font-light">
            <a onClick={() => scrollToSection("#contact", 50)}>Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row">
          <li className="p-3 z-50 cursor-pointer">EN</li>
          <li className="p-3 mr-14 z-50 cursor-pointer">AL</li>
        </ul>
      </div>
    </nav>
  );
}
