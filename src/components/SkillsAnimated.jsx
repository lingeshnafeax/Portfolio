import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie";

const rectangles = [
  {
    id: 1,
    lottieUrl:
      "https://res.cloudinary.com/dl2adjye7/raw/upload/v1716532587/stack_zrrg4m.json",
    title: "Data Science",
    description:
      "Hands-on experience in data analysis, machine learning, and data visualization.",
  },
  {
    id: 2,
    lottieUrl:
      "https://res.cloudinary.com/dl2adjye7/raw/upload/v1716532587/stack_zrrg4m.json",
    title: "Python",
    description:
      "Extensive knowledge of Python programming, including NumPy, Pandas, and Matplotlib.",
  },
  {
    id: 3,
    lottieUrl:
      "https://res.cloudinary.com/dl2adjye7/raw/upload/v1716532587/stack_zrrg4m.json",
    title: "Javascript",
    description:
      "Knowledge of JavaScript programming, including syntax, OOP, and async programming.",
  },
  {
    id: 4,
    lottieUrl:
      "https://res.cloudinary.com/dl2adjye7/raw/upload/v1716532587/stack_zrrg4m.json",
    title: "Web Design",
    description:
      "Creating visually appealing and functional websites using HTML, CSS, and responsive design techniques.",
  },
  {
    id: 5,
    lottieUrl:
      "https://res.cloudinary.com/dl2adjye7/raw/upload/v1716532587/stack_zrrg4m.json",
    title: "ReactJS",
    description:
      "Proficient in building user interfaces using ReactJS, managing state, and handling data flow in React applications.",
  },
];
// eslint-disable-next-line react/prop-types
const NotifTemplate = ({ lottieUrl, title, description }) => {
  const [animationData, setAnimationData] = useState(null);
  const [isStopped, setIsStopped] = useState(true);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const fetchAnimation = async () => {
      const response = await fetch(lottieUrl);
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimation();
  }, [lottieUrl]);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="flex items-center p-5 bg-white shadow-lg  rounded-lg w-[300px] sm:w-[700px] h-[120px] border gap-2 "
      onMouseEnter={() => {
        setIsStopped(false);
        setIsPaused(false);
      }}
      onMouseLeave={() => {
        setIsStopped(true);
        setIsPaused(true);
      }}
    >
      <div className="w-16 h-16 mr-4">
        <Lottie
          options={defaultOptions}
          height={64}
          width={64}
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </div>
      <div className="flex flex-col  ">
        <h3 className="text-lg font-bold text-left">{title}</h3>
        <p className="text-sm text-gray-600 text-left ">{description}</p>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CardPilling = ({ loop = true }) => {
  const [visibleRectangles, setVisibleRectangles] = useState([]);
  const [triggerExit, setTriggerExit] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const rectRef = useRef(null);
  const [rectHeight, setRectHeight] = useState(0);
  const margin = 20;

  useEffect(() => {
    if (rectRef.current) {
      setRectHeight(rectRef.current.offsetHeight + margin);
    }
  }, [rectRef.current]);

  useEffect(() => {
    if (!triggerExit) {
      const interval = setInterval(() => {
        setVisibleRectangles((prev) => {
          if (prev.length < rectangles.length) {
            return [rectangles[prev.length], ...prev];
          } else {
            clearInterval(interval);
            setTimeout(() => setTriggerExit(true), 1500); // Trigger exit animation 3 seconds after last rectangle
            return prev;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    } else if (loop) {
      setTimeout(() => {
        setTriggerExit(false);
        setVisibleRectangles([]);
        setLoopCount(loopCount + 1);
      }, 3000); // Restart the animation after 3 seconds
    }
  }, [triggerExit, loop, loopCount]);

  return (
    <div className="relative flex items-start justify-center pt-10 h-[800px] ">
      <AnimatePresence>
        {!triggerExit &&
          visibleRectangles.map((rect, index) => (
            <motion.div
              key={rect.id}
              ref={index === 0 ? rectRef : null} // Set ref to the first rectangle
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: index * rectHeight }} // Use dynamic height
              exit={{ opacity: 0, y: 50 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute  w-[300px] sm:w-[600px] h-[120px]"
            >
              <NotifTemplate
                lottieUrl={rect.lottieUrl}
                title={rect.title}
                description={rect.description}
              />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

function SkillsAnimated() {
  return <CardPilling></CardPilling>;
}

export default SkillsAnimated;
