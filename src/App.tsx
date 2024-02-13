import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

// import Routes
import ThemeBtn from "./components/Header/ThemeBtn";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AnimRoutes from "./Routes/AnimRoutes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
        <Footer />
      </Router>
      <ThemeBtn />
      <motion.div className="pointer-events-none fixed left-0 top-0 z-50 hidden h-[32px] w-[32px] rounded-full bg-primary lg:block"></motion.div>
    </>
  );
}

export default App;
