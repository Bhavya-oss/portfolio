import React, { useContext } from "react";
import { MyContext } from "../../App";
import "./About.css";
function About() {
  const { aboutMeRef } = useContext(MyContext);
  return (
    <div className="about" ref={aboutMeRef}>
      <div className="title-box">
        {" "}
        <h2>About Me</h2>
        <img
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="logo"
        />
      </div>
      <div className="about-section">
        <div className="image">
          <img
            src="https://greatstack.in/portfolio/assets/about_profile-kNAyOvDL.svg"
            alt="About"
          />
        </div>
        <div className="text">
          <div className="about-paragraph">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-progress">
            <div className="progress-both">
              <p>HTML5 & CSS3</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="progress-both">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="progress-both">
              <p>ReactJs</p>
              <hr style={{ width: "65%" }}></hr>
            </div>
            <div className="progress-both">
              <p>Bootstrap</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-horizantal">
        <div className="about-horizant">
          <h2>1.5+</h2>
          <p>years of experience</p>
        </div>
        <div style={{ width: "2px", backgroundColor: "white" }}></div>

        <div className="about-horizant">
          <h2>2+</h2>
          <p>projects completed</p>
        </div>
      </div>
    </div>
  );
}

export default About;
