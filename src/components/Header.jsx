import { Link } from "react-router-dom";
import logo from "../assets/Mine.jpg";
function Header() {
  return (
    <div className="pt-4 flex w-auto gap-x-6 items-center font-serif border pb-4 border-b-2 bg-slate-200">
      <img
        className=" h-14 w-14 rounded-full ml-8 hover:scale-125 transition ease-linear duration-300"
        src={logo}
      ></img>
      {/**<div className="flex gap-x-4 w-full justify-end pr-5">
        <Link to="/resume"><span className=" whitespace-nowrap">Resume</span></Link>
        <span>Projects</span>
      </div> */}
    </div>
  );
}
export default Header;
