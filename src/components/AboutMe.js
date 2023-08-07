import React from "react";
import workspaceImg from "../images/workspace.png";
import "../components/AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="aboutMeContainer" id="about">
      <img
        className="aboutMeImageContainer"
        src={workspaceImg}
        alt="Nasmi's avatar"
      />
      <div className="aboutMeTextContainer">
        <h2 className="aboutMeHeaderText">About Me</h2>
        <h4>A dedicated front-end Developer based in Ukraine 📍</h4>
        <p>
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript and React. I excel in designing and
          maintaining responsive websites that offer a smooth user experience.
          My expertise lies in crafting dynamic, engaging interfaces through
          writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
