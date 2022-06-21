import React, { useState } from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";
import "./style.css";

export default function Contact() {
  const lenguage = "";

  return (
    <div className="contact">
      <form className="container-form">
        <Title>
          {lenguage ? "¡Solo envíame un email!" : "Just send me an email!"}
        </Title>
        <div className="send-email">
          <label>{lenguage ? "Tu nombre" : "Your Name"}</label>
          <input type="text" className="input" name="name" />
          <label>Your Email</label>
          <input type="text" className="input" name="email" />
          <label>{lenguage ? "Mensaje" : "Message"}</label>
          <textarea className="input message" name="message" />
        </div>
        <Button type="submit" label={lenguage ? "Enviar" : "Send"}></Button>
      </form>
    </div>
  );
}
