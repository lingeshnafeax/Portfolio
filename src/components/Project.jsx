import React from "react";

export const Project = (props) => {
  return (
    <div className=" grid grid-cols-2 h-auto bg-slate-300 py-10 px-10 rounded-lg ">
      <img
        className=" h-124 w-128 object-fill mx-auto"
        src={props.imgsrc}
        alt={props.name}
      />
      <div>
        <h2 className=" font-sans font-bold text-xl py-3 whitespace-nowrap text-center">
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
