import React from "react";
import "./header.css";
import TopTwoBtn from "./TopTwoBtn";
import ME from "../../assets/mohak.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";
import PPNG from "../../assets/ProgPNG.svg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>I There!</h5>
        <span className="hd1">I'M</span>
        <span className="text-light hd1"> MOHAK SINGH</span>
        <img src={PPNG} className="header__ppng" alt="mohak.png"></img>
        {/* <h5 className="text-light">Full Stack Web Developer</h5> */}
        <div className="texHighlighter">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Front End Developer...",
                "Full Stack Developer...",
                "Coding Enthusiast...",
                "YouTuber...",
              ],
            }}
          />
        </div>
        <TopTwoBtn />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="mohak.jpg" />
        </div>

        <a
          rel="GoToContactPage"
          href="#contact"
          className="scroll__down"
          title="Contact me!"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
