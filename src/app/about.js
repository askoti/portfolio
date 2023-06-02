import Image from "next/image";

export default function About() {
  return (
    <div className="w-11/12 p-3 mx-auto lg:mt-52 mt-36">
      <h1 className="text-3xl lg:text-6xl md:text-5xl uppercase font-light my-10">About Me</h1>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 p-3">
          <Image src='/../public/pic1.jpg' width={500} height={400} className=""/>
          <p className="my-3 italic">
            At just 18 years old, I have embarked on a remarkable journey into
            the world of programming, having discovered my passion for it at the
            tender age of 13 or 14.
          </p>
        </div>
        <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 p-3">          <p>
          With four years of dedicated coursework under my belt, I have honed
            my skills in HTML, CSS, JavaScript, and Python.
          </p>
          <p className="w-3/4 float-right my-16 lg:block md:block sm:block hidden">
            Additionally, I have
            delved into popular frameworks such as React.js, Node.js (60%), and
            Tailwind CSS, amplifying my ability to craft captivating front-end
            experiences.
          </p>
          <button className="lg:block md:block hidden border uppercase py-3 px-14 lg:my-44">See more</button>
        </div>
        <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 p-3">
          <Image src='/../public/macbook.jpg' width={600} height={500} className="hidden lg:inline md:inline sm:inline"/>
          <p className="italic my-3">
            Although I have also gained exposure to Django, Pandas, and
            Matplotlib, my true passion lies in front-end development.
          </p>
        </div>
      </div>
    </div>
  );
}
