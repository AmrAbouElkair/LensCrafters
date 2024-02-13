import { Link } from "react-router-dom";
import { useContext } from "react";

import { CursorContext } from "../context/CursorContext";

import womenImg from "../assets/images/woman.jpg";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../assets/transitions";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="container mx-auto h-full"
      >
        <div className="flex h-full flex-col-reverse items-center justify-center gap-x-24 md:flex-row lg:pt-32 lg:text-left">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            transition={transition1}
            className="max-h-96 items-center justify-center md:flex md:flex-1 lg:max-w-max"
          >
            <img src={womenImg} alt="womenImg" className="rounded-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-center justify-center max-[485px]:mt-28 max-[375px]:mt-64 md:flex-1 md:items-start"
          >
            <h1 className="h1 dark:text-slate-100">About Me</h1>
            <p className="max-w-md text-sm text-gray-500 dark:text-slate-400 max-lg:mb-8 max-md:text-center md:text-base lg:pb-10">
              Enim sint velit veniam consectetur deserunt in est velit quis.
              Ipsum consectetur dolor sint ad anim <b>amet adipisicing</b>.
              Aliqua laborum ut nisi nostrud mollit laboris deserunt consectetur
              cillum.
              <br />
              <br />
              Enim sint velit veniam consectetur deserunt in est velit quis.
              Ipsum consectetur dolor sint ad anim amet adipisicing. Aliqua
              laborum ut nisi nostrud mollit laboris deserunt consectetur
              cillum.
            </p>
            <Link to="portfolio" className="btn text-sm max-lg:mb-6 max-lg:p-5">
              view my work
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
