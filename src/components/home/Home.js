import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import "./Home.css";
function Home() {
  const { homeRef, contactRef } = useContext(MyContext);
  return (
    <>
      <div ref={homeRef} className="home-section">
        <img
          className="home-img"
          src="https://greatstack.in/portfolio/assets/profile_img-isMTF2gD.svg"
          alt="home"
        />
        <h1>
          <span className="text-gradient">I'm Alex Bennett,</span> frontend
          developer based in USA.
        </h1>
        <p>
          I am a frontend developer from California, USA with 10 years of
          experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
        <div className="home-action">
          {" "}
          <button
            onClick={() =>
              contactRef.current.scrollIntoView({ behaviour: "smooth" })
            }
            className="home-connect"
          >
            Connect with me
          </button>
          <button className="home-resume">My resume</button>
        </div>
      </div>
    </>
  );
}

export default Home;
