import React from "react";

export const Content = () => {
  return (
    <div className="flex flex-col items-center gap-y-9 pt-32 ">
      <h1 className=" text-7xl font-bold  bg-gradient-to-r from-blue-500 via-blue-300 to-pink-500 text-transparent bg-clip-text leading-tight">
        Hey,I'm Lingesh
      </h1>
      <span className=" text-2xl font-semibold">
        Web Developer & Data Scientist
      </span>

      <div className="tracking-widest w-5/12">
        <span>
          I craft engaging web experiences and seek hidden insights from data,
          always excited by the potential at their intersection. Let's connect
          and create!
        </span>
      </div>
      <button className=" font-semibold bg-gray-300 p-4 px-7 rounded-full shadow-lg">
        See my work &darr;
      </button>
    </div>
  );
};
