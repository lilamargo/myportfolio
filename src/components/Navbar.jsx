import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-fondo md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-blue mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Liliana Martínez
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-purple1	flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            className="mr-5 text-purple1 hover:text-blue text-xl"
          >
            Past Work
          </a>
          <a
            href="#skills"
            className="mr-5 text-purple1 hover:text-blue text-xl"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="mr-5 text-purple1 hover:text-blue text-xl"
          >
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue border-0 py-1 px-3 focus:outline-none hover:bg-purple1 hover:text-fondo rounded text-fondo mt-4 md:mt-0 text-xl"
        >
          Say Hi!
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
