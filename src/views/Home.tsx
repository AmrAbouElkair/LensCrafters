import { useContext } from "react";
import { Link } from "react-router-dom";
import HomeImg from "../assets/images/Home.jpg";

// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../assets/transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="contaienr mx-auto h-full"
      >
        <div className="flex flex-col justify-center lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="z-10 flex w-full flex-col items-center justify-center pb-10 pt-36 lg:-mr-10 lg:w-auto lg:items-start lg:pb-0 lg:pt-0"
          >
            <h1 className="h1 dark:text-slate-400">
              Photographer <br /> & Film Maker
            </h1>
            <p className="mb-4 font-primary text-[26px] dark:text-slate-600 lg:mb-12 lg:text-[36px]">
              Alexandria, EG
            </p>
            <Link to="/contact" className="btn">
              Hire Me
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            transition={transition1}
            className="flex max-h-[550px] w-auto justify-center lg:max-h-max lg:max-w-[800px]"
          >
            <img src={HomeImg} alt="HomeImg" className="object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
