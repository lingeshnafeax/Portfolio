import React from "react";

export const Skills = (props) => {
  return (
    <>
      <div className=" w-64 h-auto shadow-sm transition duration-300 ease-linear hover:scale-110 shadow-slate-200 py-5 px-10 pb-5 rounded-lg hover:shadow-[0px_0px_10px_1px_rgba(226,232,240)]">
        <h2 className=" font-sans font-bold text-xl py-3 whitespace-nowrap text-center">
          {props.name}
        </h2>
      </div>
    </>
  );
};
