import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useState, useEffect } from "react";

function App() {
  // const [theme, setTheme] = useState(null);

  // useEffect(() => {
  //   if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  //     setTheme('dark');
  //   }
  //   else {
  //     setTheme('light');
  //   }
  // }, [])

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <div>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
