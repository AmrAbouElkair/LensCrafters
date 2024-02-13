import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useState } from "react";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary dark:text-slate-200 lg:hidden">
      <div className="cursor-pointer text-3xl">
        <i className="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="absolute right-0 top-0 z-10 h-screen w-full max-w-xs bg-white shadow-2xl dark:bg-slate-900"
      >
        <div className="absolute left-4 top-14 z-30 cursor-pointer text-4xl text-primary">
          <i
            className="fa-solid fa-xmark dark:text-slate-200"
            onClick={() => setOpenMenu(false)}
          ></i>
        </div>
        <ul className="flex h-full flex-col items-center justify-center gap-y-8 text-3xl font-bold text-primary">
          <li className="duration-300 hover:scale-110 dark:text-slate-300">
            <Link to="/">Home</Link>
          </li>
          <li className="duration-300 hover:scale-110 dark:text-slate-300">
            <Link to="/about">About</Link>
          </li>
          <li className="duration-300 hover:scale-110 dark:text-slate-300">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="duration-300 hover:scale-110 dark:text-slate-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
