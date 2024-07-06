import { Project } from "./Project";
import { useSelector } from "react-redux";

export const ProjectContainer = () => {
  const projects = useSelector((state) => state.project);
  return (
    <div>
      <h3 className="font-bold text-2xl mt-28 mx-9">PROJECTS</h3>
      <div className="flex flex-col mx-8 mt-20 gap-y-5 items-center">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
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
