import { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import { mySkills } from "../Utils/utils";

const Skills = () => {
  const [logo, setLogo] = useState("");
  const frontendSkills = mySkills.filter((x) => x.category == "frontend");
  const backendSkills = mySkills.filter((x) => x.category == "backend");

  const changeIcon = (event) => {
    setLogo(event.target.id);
  };

  return (
    <section className="skills" id="skills">
      <h1 className="skill-title">Frontend</h1>
      <ul className="skill-list">
        {frontendSkills.map((item) => (
          <li id={item.id} onMouseEnter={changeIcon}>
            {item.title}
          </li>
        ))}
      </ul>
      <h1 className="skill-title">Backend</h1>
      <ul className="skill-list">
        {backendSkills.map((item) => (
          <li id={item.id} onMouseEnter={changeIcon}>
            {item.title}
          </li>
        ))}
      </ul>
      <div className="skill-latop">
        <i class={logo}></i>
      </div>
    </section>
  );
};

export default Skills;
