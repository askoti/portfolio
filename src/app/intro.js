import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col w-11/12 h-full mx-auto mb-32 p-3 mt-52" id="home">
      <div className="text-3xl lg:text-6xl md:text-5xl mt-20 w-3/4 font-light uppercase bg-transparent z-10">
        <h1 className="lg:py-3 py-0 bg-transparent">Kastriot</h1>
        <h1 className="py-3 bg-transparent">Aliu</h1>
        <h1 className="bg-transparent">Front-End Developer</h1>
      </div>
      <div className="z-10 bg-transparent">
        <p className="lg:font-thin font-light text-sm lg:w-1/3 md:w-2/3 py-5 my-2 tracking-wide bg-transparent z-10">
          Welcome to my portfolio! I&apos;m Kastriot Aliu, a passionate Front-End
          Developer with a knack for creating captivating and flawless websites.
        </p>
        <button className="py-5 my-8 px-10 text-sm uppercase ring-orange-100 border">Order a Project</button>
      </div>
      <Image src='/ai.png' width={650} height={500} className=" bg-transparent absolute top-32 right-0" alt="Image"/>
    </div>
  );
}
