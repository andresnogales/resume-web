import plantswebsite from "../../images/projects/plantswebsiteFullSize.jpg";
import turismojujuy from "../../images/projects/turismojujuy.png";
import bookshop from "../../images/projects/bookshop.png";
import restobar from "../../images/projects/restobar.png";

export const projects = [
  {
    img: turismojujuy,
    year: "2022",
    textEnglish:
      "This is a personal project. I realized that the official tourism site of my province was slow and had no English translation, so I made this project, a clone site of turismo.jujuy.gob.ar but turning it into a single-page application and adding a translation feature. I used React for frontend and Spring Boot for backend.",
    textSpanish:
      "Este es un proyecto personal. Me dí cuenta que el sitio oficial de turismo de mi provincia era lenta y no tenía traducción al inglés, asi que hice este proyecto, un clon del sitio turismo.jujuy.gob.ar pero convirtiéndola en una single-page application, y agregando la traducción. Usé React para el frontend y Spring para el backend",
    id: "https://andresnogales.github.io/turismojujuy",
    animation: "fade-right",
  },
  {
    img: bookshop,
    year: "2021",
    textEnglish:
      "This is an ecommerce that allows customers to purchase books through a shopping cart and provide administration functionalities for the seller to manage their products. I used React for frontend and Spring Boot for backend.",
    textSpanish:
      "Este es un ecommerce que permite a clientes comprar libros a través de un carrito de compras y proporciona funcionalidades de administración para que el vendedor gestione sus productos. Usé React para el frontend y Spring para el backend",
    id: "https://github.com/andresnogales/resto-bar-order",
    animation: "fade-left",
  },
  {
    img: restobar,
    year: "2020",
    textEnglish:
      "This is a web application that allows restaurant customers to order their food or drink without waiting for a waiter to serve them. I used React for the frontend and Node.js for the backend",
    textSpanish:
      "Esta es una aplicacion web que permite que clientes de un restaurant puedan realizar la orden de su comida o bebida sin esperar a que sean atendidos por un mozo. Usé React para el frontend y Node.js para el backend",
    id: "https://github.com/andresnogales/resto-bar-order",
    animation: "fade-right",
  },
];

export const mySkills = [
  {
    id: "devicon-html5-plain",
    title: "Html",
    category: "frontend",
  },
  {
    id: "devicon-css3-plain",
    title: "CSS",
    category: "frontend",
  },
  {
    id: "devicon-javascript-plain",
    title: "Javascript",
    category: "frontend",
  },
  {
    id: "devicon-react-original",
    title: "React",
    category: "frontend",
  },
  {
    id: "devicon-angularjs-plain",
    title: "Angular",
    category: "frontend",
  },
  {
    id: "devicon-java-plain",
    title: "Java",
    category: "backend",
  },
  {
    id: "devicon-spring-plain",
    title: "Spring",
    category: "backend",
  },
  {
    id: "devicon-nodejs-plain",
    title: "Node.js",
    category: "backend",
  },
  {
    id: "devicon-python-plain",
    title: "Python",
    category: "backend",
  },
  {
    id: "devicon-redux-original",
    title: "Redux",
    category: "frontend",
  },
  {
    id: "devicon-mysql-plain",
    title: "MySQL",
    category: "backend",
  },
  {
    id: "devicon-postgresql-plain",
    title: "PostgreSQL",
    category: "backend",
  },
  {
    id: "devicon-salesforce-plain",
    title: "Salesforce Apex",
    category: "backend",
  },
  {
    id: "devicon-bootstrap-plain",
    title: "Bootstrap",
    category: "frontend",
  },
  {
    id: "devicon-typescript-plain",
    title: "Typescript",
    category: "backend",
  },
];
