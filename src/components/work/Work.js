import React, { useContext } from "react";
import "./Work.css";
import { MyContext } from "../../App";
function Work() {
  const { workRef } = useContext(MyContext);
  return (
    <div ref={workRef} className="work">
      <div className="title-box">
        <h2>My Latest Work</h2>
        <img
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="logo"
        />
      </div>
      <div className="work-container">
        <div>
          <a href="">
            <img src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg" />
          </a>
        </div>
        <div>
          <a href="">
            <img src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg" />
          </a>
        </div>{" "}
        <div>
          <a href="">
            <img src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg" />
          </a>
        </div>{" "}
        <div>
          <a href="">
            <img src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg" />
          </a>
        </div>{" "}
        <div>
          <a href="">
            <img src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg" />
          </a>
        </div>{" "}
        <div>
          <a href="">
            <img src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
