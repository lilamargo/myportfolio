import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-blue">
            Hi, I'm Liliana.
            <br className="hidden lg:inline" />
            Full Stack Web Developer
          </h1>
          <p className="mb-8 leading-relaxed sm:text-xl text-lg text-justify text-white">
            I love to build amazing apps. I have discovered interesting
            knowledge in the IT world, from which I love to learn new things and
            be able to apply them professionally.
            <br />I have collaborated on remote projects as a freelancer for
            startups in the USA and in organizations in Mexico. I am a person
            who likes to work with creative teams that allow me to contribute
            ideas and strengthen the bonds of teamwork. My goal is to build my
            experience in managing IT projects.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-fondo bg-purple2 border-0 py-2 px-6 focus:outline-none hover:bg-fondo hover:text-blue rounded text-lg"
            >
              See My Past Work
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1sFr2oXZsPYXcbxG6uPuXXsvwm-NPKrT3"
              download
            >
              <button class="bg-gray-300 hover:bg-gray-400 text-blue font-bold py-2 px-4 rounded inline-flex items-center border-transparent hover:border-transparent">
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="https://drive.google.com/uc?export=download&id=1sFr2oXZsPYXcbxG6uPuXXsvwm-NPKrT3"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download Resume</span>
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.gif"
          />
        </div>
      </div>
    </section>
  );
}
