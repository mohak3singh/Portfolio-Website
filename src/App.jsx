import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/* <Services/> */}
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
