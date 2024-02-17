import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CursorContext } from "../../context/CursorContext";

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <footer className="bg-gray-100 shadow dark:bg-gray-950">
      <div className="mx-auto w-full max-w-[90rem] p-4 md:py-8">
        <motion.div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-primary text-3xl font-bold dark:text-gray-200 sm:text-4xl"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            LensCrafters
          </Link>
          <motion.ul>
            <nav
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden items-center justify-center gap-x-12 lg:flex"
            >
              <li>
                <Link
                  to="/"
                  className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
                >
                  Contact
                </Link>
              </li>
            </nav>
          </motion.ul>
        </motion.div>
        <hr className="my-6 border-gray-400 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Lenscrafters™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
