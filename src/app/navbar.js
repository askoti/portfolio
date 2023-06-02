import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full h-24 py-5 mx-auto lg:flex md:flex hidden flex-row justify-between fixed top-0 right-0 z-20" style={{backgroundColor: "#06060A"}}>
        <div>
            <ul className="flex flex-row justify-between items-center">
                <li className="p-3 ml-14 cursor-pointer"><Image src='/../public/web-design.png' width={40} height={40}/></li>
                <li className="p-3 cursor-pointer tracking-wider font-light">About Me</li>
                <li className="p-3 cursor-pointer tracking-wider font-light">Skills</li>
                <li className="p-3 cursor-pointer tracking-wider font-light">Portfolio</li>
                <li className="p-3 cursor-pointer tracking-wider font-light">Contact</li>
            </ul>
        </div>
        <div>
            <ul className="flex flex-row">
                <li className="p-3 z-50 cursor-pointer">EN</li>
                <li className="p-3 mr-14 z-50 cursor-pointer">AL</li>
            </ul>
        </div>
    </nav>
  )
}
