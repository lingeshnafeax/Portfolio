import React from "react";
import { Skills } from "./Skills";

export const SkillsContainer = () => {
  const names = [
    "Javascript",
    "Python",
    "React",
    "Data Visualization",
    "Machine Learning",
    "Deep Learning",
  ];
  return (
    <>
      <h3 className="font-bold text-2xl mt-36 mx-9">SKILLS</h3>
      <div className="grid sm:grid-cols-1 grid-flow-row lg:grid-cols-4 justify-items-center mt-20 gap-y-5 ">
        {names.map((name) => (
          <Skills name={name}></Skills>
        ))}
      </div>
    </>
  );
};
