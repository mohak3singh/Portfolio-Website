import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project_01.png";
import IMG2 from "../../assets/TMS.png";
import IMG3 from "../../assets/cam.png";
import IMG4 from "../../assets/taskM.png";


const data = [
  {
    id: 1,
    image: IMG2,
    title: "User Travel Request Manager",
    github: "https://github.com/mohak3singh/User-Travel-Management",
    demo: "https://github.com/mohak3singh/User-Travel-Management#readme",
  },
  {
    id: 2,
    image: IMG4,
    title: "Priority Task Generator",
    github: "https://github.com/mohak3singh/priority-task-manager",
    demo: "https://priority-task-manager.netlify.app/",
  },
  {
    id: 3,
    image: IMG1,
    title: "EXCEL Clone",
    github: "https://github.com/mohak3singh/EXCEL_Application",
    demo: "https://mohak3singh.github.io/EXCEL_Application/",
  },
  {
    id: 4,
    image: IMG3,
    title: "WEB CAMERA APPLICATION",
    github: "https://github.com/mohak3singh/CAMERA_APP_DOM#web-camera-application",
    demo: "https://mohak3singh.github.io/CAMERA_APP_DOM/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="about__heading2">My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item__btns">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
