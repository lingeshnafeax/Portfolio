import emailicom from "../assets/email.png";
// import phoneicon from "../assets/viber.png";
import linkedinicon from "../assets/linkedin-logo.png";
import githubicon from "../assets/github.png";

export const FooterContainer = () => {
  return (
    <div className=" mt-32 bg-slate-200 h-56 flex flex-col gap-y-3">
      <h1 className=" text-2xl font-bold p-5  ">Contact me</h1>
      <div className="flex items-center font-semibold">
        <img className=" h-5 ml-5" src={emailicom} alt="" />
        <a href="mailto:wlingesh260@gmail.com">
          <span className="block ml-3 ">wlingesh260@gmail.com</span>
        </a>
      </div>
      {/*<div className="flex font-semibold">
        <img className=" h-5 ml-5" src={phoneicon} alt="" />
        <span className="block ml-3">9943378508</span>
      </div> */}
      <div className="flex font-semibold">
        <img className=" h-5 ml-5" src={linkedinicon} alt="" />

        <a
          target="_blank"
          href="https://www.linkedin.com/in/lingeshpatturaj"
          className="block ml-3"
        >
          LinkedIn
        </a>
      </div>

      <div className="flex font-semibold">
        <img className=" h-5 ml-5" src={githubicon} alt="" />

        <a
          target="_blank"
          href="https://github.com/lingeshnafeax"
          className="block ml-3"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
