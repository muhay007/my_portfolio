import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(null);

  // for dark theme
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(245, 245, 245)",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  // dark theme

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 p-4 rounded-md hover:animate-pulse border-none"
      >
        {theme === "dark" ? (
          <FaCloudSun className="w-16 h-16 text-yellow-400" />
        ) : (
          <FaCloudMoon className="w-16 h-16 text-indigo-400" />
        )}
      </button>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div
        className="App bg-stone-50 dark:bg-slate-900 min-h-screen"
        initial={{ opacity: 0 }}
        whileinview={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Hero />
        <Services />
        <About textEnter={textEnter} textLeave={textLeave} />
        <Projects textEnter={textEnter} textLeave={textLeave} />
        <Contact />
      </div>
    </>
  );
}

export default App;
