import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-blue" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-blue">
            Apps I've Built and Collaborated
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl text-center">
            I have built different applications as part of my development and
            learning, individually applying different technologies and I have
            also collaborated with a team of 8 people to build the Foodarity
            App, I collaborated on the frontend.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              target="_blank"
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-blue bg-fondo opacity-10 hover:opacity-95">
                  <h2 className="tracking-widest text-xl title-font font-medium text-blue mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-xl font-medium text-blue mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-xl text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
