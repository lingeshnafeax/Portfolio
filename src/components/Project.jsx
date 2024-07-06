export const Project = (props) => {
  //destructuring in the parameter
  // eslint-disable-next-line react/prop-types
  const { imgsrc, name, link, description } = props;
  return (
    <div className=" grid h-auto shadow-[0px_0px_4px_1px_rgba(226,232,240)] transition duration-300 ease-linear hover:shadow-[0px_0px_8px_6px_rgba(226,232,240)] bgsla py-10 px-10 rounded-lg sm:grid-cols-1 sm:grid-flow-row lg:grid-cols-2  ">
      <img
        className=" mx-auto h-60 sm:h-124 sm:w-128 rounded-md lg:ml-2"
        src={imgsrc}
        alt={name}
      />
      <div>
        <h2 className=" mx-auto text-center  font-sans font-bold text-xl py-3 sm:w-36 lg:w-auto">
          {name}
        </h2>
        <p className=" font-serif mb-auto">{description}</p>
        <a href={link} target="blank">
          <button className="block mt-5 bg-slate-400 px-9 py-2 rounded-full shadow-md font-semibold transition duration-300 ease-linear hover:scale-105 hover:text-white">
            Link
          </button>
        </a>
      </div>
    </div>
  );
};
