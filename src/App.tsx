import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import CursorContext
import { CursorContext } from "./context/CursorContext";
// import Routes
import ThemeBtn from "./components/Header/ThemeBtn";
import Header from "./components/Header/Header";
import AnimRoutes from "./Routes/AnimRoutes";

import { motion } from "framer-motion";

function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      <ThemeBtn />
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-[32px] w-[32px] rounded-full bg-primary lg:block"
      ></motion.div>
    </>
  );
}

export default App;
