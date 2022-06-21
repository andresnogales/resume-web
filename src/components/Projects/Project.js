import React from "react";
import "./style.css";
import { projects } from "../Utils/utils";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Projects() {
  const size = 1200;

  const lenguage = "";
  const handleOnClick = (e) => {
    console.log("click ");
    let path = e.target.id;
    window.open(path);
  };

  return (
    <div>
      <div className="projects">
        <AliceCarousel
          keyboardNavigation={true}
          renderPrevButton={() => {
            return (
              <p className="p-4 absolute left-0 top-0 button-arrow">
                <i class="fa-solid fa-arrow-left"></i> Prev
              </p>
            );
          }}
          renderNextButton={() => {
            return (
              <p className="p-4 absolute right-0 top-0  button-arrow">
                Next <i class="fa-solid fa-arrow-right"></i>
              </p>
            );
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="image_project"
              data-aos={project.animation}
              data-aos-delay="70"
              data-aos-easing="ease-in-out"
            >
              <img
                src={project.img}
                alt="Oh no!"
                style={{ width: "100%" }}
                className="hover sliderimg"
                id={project.id}
                onClick={(e) => handleOnClick(e)}
              />
              {size.width > 750 ? (
                <p
                  className="text_projects"
                  id={project.id}
                  onClick={(e) => handleOnClick(e)}
                >
                  <h2>{project.year}</h2>
                  {lenguage ? project.textSpanish : project.textEnglish}
                </p>
              ) : (
                <p className="text_projects" id={project.id}>
                  <h2>{project.year}</h2>
                  {lenguage ? project.textSpanish : project.textEnglish}
                </p>
              )}
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
}
