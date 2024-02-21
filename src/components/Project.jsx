import React from "react";

export const Project = (props) => {
  return (
    <div className=" grid h-auto bg-slate-300 py-10 px-10 rounded-lg sm:grid-cols-1 sm:grid-flow-row lg:grid-cols-2  ">
      <img
        className=" h-124 w-128 rounded-md"
        src={props.imgsrc}
        alt={props.name}
      />
      <div>
        <h2 className="  font-sans font-bold text-xl py-3  text-center sm:w-36 lg:w-auto">
          {props.name}
        </h2>
        <p className=" font-serif mb-auto">{props.description}</p>
        <a href={props.link} target="blank">
          <button className="block mt-5 bg-slate-400 px-9 py-2 rounded-full shadow-md font-semibold">
            Link
          </button>
        </a>
      </div>
    </div>
  );
};
