// import { a } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed z-30 flex h-[100px] w-full items-center px-[30px] lg:h-[140px] lg:px-[100px]">
      <div className="flex w-full flex-col justify-between lg:flex-row lg:items-center">
        <div className="flex items-center justify-start lg:justify-center">
          <a
            //   onMouseEnter={mouseEnterHandler}
            //   onMouseLeave={mouseLeaveHandler}
            href="/"
            className="h1 flex items-center justify-center text-[50px] dark:text-slate-200"
          >
            LensCrafters
          </a>
        </div>
        <nav
          // onMouseEnter={mouseEnterHandler}
          // onMouseLeave={mouseLeaveHandler}
          className="hidden items-center justify-center gap-x-24 lg:flex"
        >
          <a
            href="/"
            className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
          >
            Portfolio
          </a>
          <a
            href="/contact"
            className="text-[#545657] duration-300 hover:text-primary dark:text-[#9c9f9f]"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
