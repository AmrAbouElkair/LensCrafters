import { Link } from "react-router-dom";
import { useContext } from "react";

import img1 from "../../assets/images/Portfolio/1.png";
import img2 from "../../assets/images/Portfolio/2.png";
import img3 from "../../assets/images/Portfolio/3.png";
import img4 from "../../assets/images/Portfolio/4.png";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../../assets/transitions";

const Portfolio = () => {
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
        <div className="flex h-full flex-col items-center justify-center gap-x-24 md:flex-row lg:pt-32 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-center justify-center max-[485px]:mt-28 max-[375px]:mt-64 md:flex-1 md:items-start"
          >
            <h1 className="h1 dark:text-slate-100">Portfolio</h1>
            <p className="max-w-md text-sm text-gray-400 dark:text-slate-400 max-lg:mb-8 max-md:text-center md:text-base lg:pb-10">
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
            <Link to="/contact" className="btn text-sm max-lg:mb-6 max-lg:p-5">
              Hire me
            </Link>
          </motion.div>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 gap-2 dark:drop-shadow-[10px_10px_10px_gray] md:flex-1"
          >
            <div className="h-[187px] max-w-[250px] overflow-hidden rounded-lg bg-accent lg:h-[220px] lg:max-w-[320px]">
              <img
                src={img1}
                alt="portfolio1"
                className="h-full object-cover duration-500 hover:scale-110"
              />
            </div>
            <div className="h-[187px] max-w-[250px] overflow-hidden rounded-lg bg-accent lg:h-[220px] lg:max-w-[320px]">
              <img
                src={img2}
                alt="portfolio2"
                className="h-full object-cover duration-500 hover:scale-110"
              />
            </div>
            <div className="h-[187px] max-w-[250px] overflow-hidden rounded-lg bg-accent lg:h-[220px] lg:max-w-[320px]">
              <img
                src={img3}
                alt="portfolio3"
                className="h-full object-cover duration-500 hover:scale-110"
              />
            </div>
            <div className="h-[187px] max-w-[250px] overflow-hidden rounded-lg bg-accent lg:h-[220px] lg:max-w-[320px]">
              <img
                src={img4}
                alt="portfolio4"
                className="h-full object-cover duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
