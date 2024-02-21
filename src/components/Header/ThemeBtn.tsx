import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";

const ThemeBtn = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    return storedTheme ? storedTheme === "true" : false;
  });

  useEffect(() => {
    if (toggleDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDarkMode", String(toggleDarkMode));
  }, [toggleDarkMode]);

  const { mouseToggleTheme, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      onMouseEnter={mouseToggleTheme}
      onMouseLeave={mouseLeaveHandler}
      className={`group fixed left-0 top-24 h-12 w-10 sm:top-32 ${
        toggleDarkMode
          ? "bg-orange-500/25 hover:bg-orange-500"
          : "bg-blue-100 hover:bg-blue-900"
      } z-30 flex cursor-pointer items-center justify-center rounded-r-full text-white duration-200 hover:w-14`}
      onClick={() => setToggleDarkMode((prev) => !prev)}
      id="toggleDark"
    >
      <i
        className={`fa-solid ${
          toggleDarkMode ? "fa-sun" : "fa-moon"
        } text-[22px]  duration-200`}
      ></i>
    </motion.div>
  );
};

export default ThemeBtn;

// opacity-50 hover:opacity-100
