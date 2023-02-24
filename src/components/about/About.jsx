import React from "react";
import "./about.css";
import ME from "../../assets/mohak3.jpg";
import { FaAward } from "react-icons/fa";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5 className="about__heading2">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div>
          <div className="about__me">
            <div className="about__me__image">
              <img src={ME} alt="Mohak.png"></img>
            </div>
          </div>
        </div>
        <div className="intro__txt">
          <p>
            Hi everyone, my name is Mohak Singh i belong from Ghaziabad(UP),
            India. I pursued my under graduation in Computer Science and
            Engineering from Guru Tegh Bahadur Institute Of Technology, New
            Delhi from " 2017-2021 ". <br /><br />
            Currently i am Working as a Full Stack Developer at MTSL (Motherson
            Technology Services Limited) from 16TH Sep 2021 to date. I am an
            Enthusiast Coder Eager to contribute to team success through hard
            work, skills, attention to details and excellent organizational
            skills.
          </p>
          <div className="about__btn">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      <div className="about__content__conatiner">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>
                Full Stack Developer with more than 1 year of experience in
                programming, analyzing and developing user interfaces using
                JAVA, ReactJS, NodeJS, Spring Boot, JavaScript, AngularJS, HTML5
                and CSS.
              </small>
            </article>

            <article className="about__card">
              <BsFillFolderSymlinkFill className="about__icons" />

              <h5>Projects</h5>
              <small>
                I have developed multiple Front End and Full Stack Projects
                using React JS, Javascript, HTML5, CSS, NodeJS and Spring Boot,
                Angular JS, JQuery, Bootstrap.
              </small>
              <div className="view__project__tab">
                <a href="#portfolio" className="view__pro">
                  View Projects
                </a>
              </div>
            </article>

            <article className="about__card">
              <SiYoutubegaming className="about__icons" />
              <h5>Extra Achievement</h5>
              <small>
                I started my Youtube channel in the first year of my college in
                2017 and right now i have " 1 Lakh+ Subscribers " on my YouTube
                Channel.
              </small>
              <a
                rel="noreferrer"
                className="yt__icon"
                title="Click Me"
                href="https://www.youtube.com/c/EnDgameGOKUGAMING"
                target="_blank"
              >
                <BsYoutube size={30} />
              </a>
            </article>
          </div>
        </div>
      </div>

      <div className="ptag__sectag">
        <div className="respon__div">
          <h2 className="ptag__heading__stars">EMPLOYMENT DETAILS</h2>
          <p className="emp__details__head">
            As a Full Stack Developer working at Motherson Technology Services
            for more than 1 year i have gained industry level experience on Tech
            Stacks like - Java, Spring Boot, Angular Js, JQuery, Bootstrap, HTML
            5, CSS 3.
          </p>
        </div>
        <br />
        <div className="respon__div">
          <h2 className="ptag__heading__stars">
            My key Responsibilities in Project
          </h2>
          <ul className="li__points">
            • Involved in code development and customization of the application.{" "}
            <br />
            • Customization and integration of product as per client
            requirement. <br />
            • Involved in Unit and Regression testing of the system in
            stimulated environment. <br />
            • Implemented the architecture using Agile methodology under Eclipse
            environment. <br />• Application development with strict adherence
            to J2EE best practices.
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
