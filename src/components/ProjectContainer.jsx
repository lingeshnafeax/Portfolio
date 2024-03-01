import React, { useContext } from "react";
import { Project } from "./Project";
import HousePrice from "../assets/placeholderlogo.jpg";
import Diabetes from "../assets/diabetes.jpg";
import CustomerSegmentation from "../assets/customersegmentation.png";
import { Context } from "../AppContainer";

export const ProjectContainer = () => {
  const projects = useContext(Context);
  return (
    <div>
      <h3 className="font-bold text-2xl mt-28 mx-9">PROJECTS</h3>
      <div className="flex flex-col mx-8 mt-20 gap-y-5 items-center">
        {projects.map((project) => {
          return (
            <Project
              id={project.id}
              name={project.name}
              imgsrc={project.imgsrc}
              link={project.link}
              description={project.description}
            ></Project>
          );
        })}
      </div>
    </div>
  );
};
