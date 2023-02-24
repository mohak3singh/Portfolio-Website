import React from "react";
import "./navbar.css";
import { ImHome } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { RiServiceFill } from "react-icons/ri";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        rel="GoToHome"
        href="/#" title="Home Page"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <ImHome />
      </a>
      <a
        rel="GoToAboutMe"
        href="#about" title="About Me"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        rel="GoToExperience"
        href="#experience" title="My Experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <ImBriefcase />
      </a>
      <a
        rel="GoToPortfolio"
        href="#portfolio" title="My Projects"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
      <a
        rel="GoToContact"
        href="#contact" title="Contact Me!"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsTelephoneForwardFill />
      </a>
    </nav>
  );
};

export default Navbar;
