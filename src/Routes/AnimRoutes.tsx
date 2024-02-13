import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Portfolio from "../views/Portfolio";
import { AnimatePresence } from "framer-motion";

import { Route, Routes, useLocation } from "react-router-dom";

// function App() {
//
//   console.log(location);

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimRoutes;
