import React from "react";

export const Skills = (props) => {
  return (
    <>
      <div className=" w-64 h-auto bg-slate-300 py-5 px-10 pb-5 rounded-lg">
        <h2 className=" font-sans font-bold text-xl py-3 whitespace-nowrap text-center">
          {props.name}
        </h2>
      </div>
    </>
  );
};
