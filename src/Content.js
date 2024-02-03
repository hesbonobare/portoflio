// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.jpg";
import tailwind from "./assets/images/Skills/tailwind.png";
import javascript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import next from "./assets/images/Skills/next.png";
import mongo from './assets/images/Skills/mongo.png';
import css from "./assets/images/Skills/css.png";
import graphQl from "./assets/images/Skills/graphql.png"

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import {FaTwitter} from "react-icons/fa"
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "HESBON",
    LastName: "M",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experince in Web development",
      },
      {
        count: "Several projects",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML5",
        logo: html,
        para:"Can use HTML5 to develop a simple static web app "
      },
      {
        name: "React js",
        logo: reactjs,
        para:"Can use React js to develop the frontend of a fullstack web app or use it to develop a frontend web app" 
      },
      { 
        name: "CSS3",
        logo:css,
        para:"Work with css together with html to develop a simple static website"
      },
      {
        name: "Node js",
        logo: nodejs,
        para:"Can use Node js to develop the backend of a MERN stack web app and apis"
      },
      {
        name: "Javascript",
        logo: javascript,
        para:"Can use Javascript together HTML5 and CSS3 to develop a simple interactive web app"
      },
      {
        name: "Tailwind css",
        logo: tailwind,
        para:"Can use Tailwind to style the web app where CSS in not involved"
      },
      {
        name: "Next js",
        logo: next,
        para:"Can use Next js to develop a fullstack web app"
      },
      {
        name: "MONGO DB",
        logo: mongo,
        para:"Work with MONGO DB to create databases"
      },
      {
        name: "GRAPHQL",
        logo: graphQl,
        para:"Use graphQl to create databases"

      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend web development",
        para: "I use javascript,css and html to develop a simple frontend web app in addition to React to develop a fully frontend web app.",
        logo: services_logo1,
      },
      {
        title: "Backend web development",
        para: "I use Node js and Express js to develop the backend of a web app and apis",
        logo: services_logo1,
      },
      {
        title: "Fullstack web development",
        para: "I use a combination of React js,Node js,Express js and MONGOBD to develop a fullstack web app.I can also use NEXT JS together with MONGODB to develop a fullstack web app ",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Cocktail Store",
        image: project1,
        link:"https://cocktailsmenus.netlify.app/"
      },
      {
        title: "Ecommerce web app",
        image: project2,
        link:"https://guileless-semifreddo-35dd92.netlify.app/"
      },
      {
        title: "Amazon Clone",
        image: project3,
        link:"#"//https://contest-453cc.web.app
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hire me to develop web apps that are user friendly and SEO-friendly with neat and clean source codes and well organised files ",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {//codeaprogram@gmail.com
        text: "hesbonobt@gmail.com",
        icon: GrMail,
        link: "mailto:hesbonobt@gmail.com",
      },
      {//+91 1234 56778
        text: "+245112118402",
        icon: MdCall,
        link: "https://wa.link/889oph",
      },
      {
        text: "hesbonprojects",
        icon:  BsInstagram ,
        link: "https://www.instagram.com/hesbonprojects/",
      },
    ],
  },

  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
