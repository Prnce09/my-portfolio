import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Loader from "./components/Loader";

function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />

        <Route
          path="/skills"
          element={
            <PageWrapper>
              <Skills />
            </PageWrapper>
          }
        />

        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />

        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />

      </Routes>

    </AnimatePresence>
  );
}

function PageWrapper({ children }) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        filter: "blur(10px)",
      }}

      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}

      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(10px)",
      }}

      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}

      className="bg-black min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>

      <AnimatedRoutes />

    </BrowserRouter>
  );
}