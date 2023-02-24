import React from "react";
import "./services.css";
import { GoCheck } from "react-icons/go";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit am</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sque?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicinge?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dom atque?</p>
            </li>
          </ul>
        </article>

        {/* END OF 1ST SERVICE  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsumquam atque?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem liquam atque?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolellat, aliquam atque?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem i Lorem ipsum dquam atque?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum de?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem Lorem ipsaliquam atque?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF 2ND */}

        <article className="service">
          <div className="service__head">
            <h3>ETC</h3>
          </div>

          <ul className="service__list">
            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolor situe?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sie?</p>
            </li>

            <li>
              <GoCheck className="service__list__icon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
          </ul>
        </article>

        {/* END OF 1ST SERVICE  */}
      </div>
    </section>
  );
};

export default Services;
