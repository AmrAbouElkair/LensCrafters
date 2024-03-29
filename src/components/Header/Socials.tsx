import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="ml-24 hidden gap-x-5 dark:text-slate-200 xl:flex"
    >
      <i className="fa-brands fa-facebook-f cursor-pointer"></i>
      <i className="fa-brands fa-twitter cursor-pointer"></i>
      <i className="fa-brands fa-pinterest cursor-pointer"></i>
      <i className="fa-brands fa-instagram cursor-pointer"></i>
      <i className="fa-brands fa-youtube cursor-pointer"></i>
    </div>
  );
};

export default Socials;
