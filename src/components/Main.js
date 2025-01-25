import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./services/Services";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Work />
      <Contact />
      <div style={{ margin: "8px 10%" }}>
        {" "}
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
