import React, { useState } from "react";
import Project from "./Project";
import "./Portfolio.css";

import * as PRO_BUILD from "../projects/pro_build";
import * as STOCKER from "../projects/stocker";
import * as CHESS_BATTERY from "../projects/chess_battery";

const Portfolio = () => {
  const [chessBattery, setChessBattery] = useState(true);
  const [stocker, setStocker] = useState(false);
  const [proBuild, setProBuild] = useState(false);

  const handleToggle = (element: React.MouseEvent<HTMLButtonElement>) => {
    let target = element.currentTarget.id;

    setChessBattery(false);
    setProBuild(false);
    setStocker(false);

    if (target === "chess_battery") setChessBattery(true);
    if (target === "stocker") setStocker(true);
    if (target === "pro_build") setProBuild(true);
  };

  const currentProject = () => {
    if (chessBattery) return CHESS_BATTERY;
    if (stocker) return STOCKER;
    if (proBuild) return PRO_BUILD;
  };

  return (
    <>
      <h1 className="page-header font-playfair">Portfolio</h1>
      <div id="portfolio-body">
        <p id="project-title" className="font-playfair">
          Project
        </p>
        <div id="project-names">
          <button
            className={`project-name ${chessBattery ? "active" : ""}`}
            id="chess_battery"
            onClick={handleToggle}
          >
            chess_battery
          </button>
          <button
            className={`project-name ${stocker ? "active" : ""}`}
            id="stocker"
            onClick={handleToggle}
          >
            stocker
          </button>
          <button
            className={`project-name ${proBuild ? "active" : ""}`}
            id="pro_build"
            onClick={handleToggle}
          >
            pro_build
          </button>
        </div>
        <Project project={currentProject()} />
      </div>
    </>
  );
};

export default Portfolio;
