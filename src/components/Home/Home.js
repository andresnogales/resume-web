import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./style.css";

export default function Home({ setPos }) {
  const lenguage = "";
  const [state, setState] = useState(false);
  const [lips, setLips] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState(true);
      setLips(true);
    }, 3900);
    setTimeout(() => {
      setLips(false);
    }, 2800);
  }, []);

  const text = [];
  return (
    <section className="home">
      <div className="container_image_pixel">
        <div className="image_pixel">
          <div className={lips ? "lips" : undefined} />
        </div>
      </div>
      <div className="container_intro">
        <div className="command">
          <p className="text-top">{text[0]}</p>
          <div style={{ position: "relative" }}>
            <p
              className="line anim-typewriter"
              style={{ border: state ? "none" : undefined }}
            >
              {lenguage
                ? "¡Hola! ¡Es bueno verte aquí!"
                : "Hey! It's nice to see you here!"}
            </p>
            {state && (
              <p style={{ width: "13em" }} className="line anim-typewriter2">
                {lenguage
                  ? "Quieres conocer más sobre mi?"
                  : "Do you wanna know more about me?"}
              </p>
            )}
          </div>
          <p className="text-top">{text[1]}</p>
        </div>
        <div className="container-button" onClick="">
          <Link to="/resume-web/about">
            <Button label={"Continue"}></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
