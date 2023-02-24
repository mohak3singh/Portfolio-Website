import React from "react";
import "./experience.css";
import { ImUserCheck } from "react-icons/im";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="about__heading2">What Skills I Have</h5>
      <h2>Professional Skillset</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>REACT JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>ANGULAR JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>JQUERY</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>JSP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>SPRING FRAMEWORK</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>SPRING BOOT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>SERVLET</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <ImUserCheck className="experience__details__icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
