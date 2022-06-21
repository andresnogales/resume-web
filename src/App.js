import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Project";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Skills from "./components/Skills/Skills";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div className="wrapper">
        <Routes>
          <Route path="/resume-web" element={<Home />}></Route>
          <Route path="/resume-web/about" element={<About />}></Route>
          <Route path="/resume-web/skills" element={<Skills />}></Route>
          <Route path="/resume-web/projects" element={<Projects />}></Route>
          <Route path="/resume-web/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
