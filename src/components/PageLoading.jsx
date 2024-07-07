import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rectangleVariants = {
  initial: {
    x: "0%",
  },
  animate: (i) => ({
    x: "100%",
    transition: {
      delay: 0.1 * i, // Staggered delay for each rectangle
      duration: 0.5,
      ease: "easeIn",
    },
  }),
};

const Loading = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-50"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-full h-1/5 bg-slate-900 flex items-center justify-center`}
          initial="initial"
          animate="animate"
          custom={i}
          variants={rectangleVariants}
          style={{ top: `${i * 20}%` }}
        >
          {i === 2 && (
            <img src="./src/assets/Mine.ico" alt="Logo" className="h-32 w-32" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

// eslint-disable-next-line react/prop-types
const PageTransition = ({ children, isAnimating, setIsAnimating }) => {
  useEffect(() => {
    let timer;
    if (isAnimating) {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Total duration of the animations
    }
    return () => clearTimeout(timer);
  }, [isAnimating, setIsAnimating]);

  return (
    <>
      <AnimatePresence>{isAnimating && <Loading />}</AnimatePresence>
      <div
        className={`relative ${
          isAnimating ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        {children}
      </div>
    </>
  );
};

// Usage in your main App component
const ExampleLoading = () => {
  const [isAnimating, setIsAnimating] = useState(true); // Start animation on load

  const handleButtonClick = () => {
    setIsAnimating(true);
  };

  return (
    <PageTransition isAnimating={isAnimating} setIsAnimating={setIsAnimating}>
      <div className=" flex items-center justify-center">
        <button onClick={handleButtonClick}>My Portfolio</button>
      </div>
    </PageTransition>
  );
};

function PageLoading() {
  return (
    <div className="text-center">
      <ExampleLoading />
    </div>
  );
}

export default PageLoading;
