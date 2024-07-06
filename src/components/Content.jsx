/* eslint-disable react/no-unescaped-entities */

export const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-9 pt-32 ">
      <h1 className=" text-center text-7xl font-bold  bg-gradient-to-r from-blue-500 via-blue-300 to-pink-500 text-transparent bg-clip-text leading-tight">
        Hey,I'm Lingesh
      </h1>
      <span className=" text-xl font-semibold text-center">Web Developer</span>

      <div className=" w-9/12 tracking-widest flex justify-center sm:w-5/12 sm:px-5">
        <span className="font-serif">
          I create engaging web experiences that blend creativity with
          technology. Passionate about user-centric design, I'm ready to turn
          ideas into impactful digital solutions. Let's collaborate!
        </span>
      </div>

      {/* <button className=" font-semibold bg-gray-300 p-4 px-7 rounded-full shadow-lg hover:translate-y-2 transition ease duration-300 hover:scale-105">
        See my work &darr;
      </button> */}
      {/*Still need to implement the navigation */}
    </div>
  );
};
