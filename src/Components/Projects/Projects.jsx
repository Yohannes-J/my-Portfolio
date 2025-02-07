import React from "react";
import ProjectCard from "./ProjectCard";
import Reader from "./Reader";
import Calculator from "./Calculator";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Code from Github"
          main=" Funiture Materials Delivery is a website created in react js and used some component library used some component library"
        />
        <Reader
          title="Clone From Public Github Account"
          main="This is a bloggin website created in raect js and used some component library used some component library"
        />
        <Calculator
          title="Google website  Clone"
          main="This is a blogging website created this portfolio in react js and used some component library used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;
