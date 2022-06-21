import React from "react";
import "./style.css";

const About = () => {
  const lenguage = "";
  return (
    <section className="about">
      <div className="max-width">
        <div className="about-content">
          <div className="about-image"></div>
          <div className="column right about-box">
            <h1 className="about-title">
              {lenguage
                ? "¡Hola! Me llamo Andrés Nogales"
                : "Hi! I am Andrés Nogales"}
            </h1>
            <h1 className="about-subtitle">
              {lenguage
                ? "soy un Full Stack Web Developer"
                : "a Full Stack web Developer"}
            </h1>
            <h2>
              {lenguage
                ? "Me apasiona lo relacionado con la tecnologia y me encanta aprender más sobre programación y frameworks, asi que estoy en constante aprendizaje. En cuanto a experiencia profesional, no tengo mucha pero estoy deseando ganar más."
                : "I am passionate about technology and I really enjoy learning more about programming and frameworks, so I am constantly improving my knowledge. As for professional experience, I don't have much but I am looking forward to gaining more. "}
            </h2>
            <h2>
              {lenguage
                ? "Actualmente trabajo en Openix IT Solutions como desarrollador de Salesforce. Me considero responsable, organizado, autodidacta y valoro mucho el trabajo en equipo."
                : "I am currently working at Openix IT Solutions as a Salesforce developer. I considered myself responsible, organized, autodidact and I highly appreciate teamwork."}
            </h2>
          </div>
          <div className="resume-link">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1qZvb_M_p1bWJN3kXXzZXzTug5iEP_VXYvq93jOjulpE"
            >
              <div className="cv-icon"></div>
            </a>
            <div className="link-hold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
