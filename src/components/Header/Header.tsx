import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext";

import { Link } from "react-router-dom";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className="fixed z-30 flex h-[100px] w-full items-center px-[30px] lg:h-[140px] lg:px-[100px]">
      <div className="flex w-full flex-col justify-between lg:flex-row lg:items-center">
        <div className="flex items-center justify-start lg:justify-center">
          <Link
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            to="/"
            className="h1 flex items-center justify-center text-[50px] dark:text-slate-200"
          >
            LensCrafters
          </Link>
        </div>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden items-center justify-center gap-x-24 lg:flex"
        >
          <Link
            to="/"
            className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
          >
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
