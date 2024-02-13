import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

import HomeImg from "../assets/images/woman.png";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../assets/transitions";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section className="section z-10">
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="absolute bottom-0 left-0 top-72 z-0 w-full bg-[#eef7f9] max-lg:top-28"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex h-full flex-col items-center justify-start gap-x-8 pt-36 text-center lg:flex-row lg:text-left"
        >
          <div className="z-20 px-4 lg:flex-1 lg:pt-32">
            <h1 className="h1">Contact me</h1>
            <p className="max-w-md text-sm text-gray-500 max-lg:mb-8 max-md:text-center md:text-base lg:pb-10">
              I would love to get suggestions from you.
            </p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-black"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your e-mail address"
                  className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-black"
                />
              </div>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Your Message"
                className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-black"
              />
              <button
                type="submit"
                className="btn mx-auto mb-[30px] self-start dark:bg-black lg:mx-0"
              >
                Send it
              </button>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="z-20 rounded-t-3xl lg:flex-1"
          >
            <img src={HomeImg} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
