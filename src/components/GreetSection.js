import React from "react";
import avatarImg from "../images/avatar.png";
import SocialMediaLinks from "./SocialMediaLinks";
import TeckStack from "./TeckStack";

export const GreetSection = () => {
  return (
    <div className="greetContainer">
      <div className="avatarContainer">
        <img className="avatar" src={avatarImg} alt="Nasmi's avatar" />
      </div>
      <div className="selfPresContainer">
        <h1 className="headerGreeting">Front-End React Developer 👋</h1>
        <p className="textGreeting">
          Hi, I'm Nastya Smirnova. A Passionate Front-end React Developer based
          in Ukraine 📍
        </p>
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default GreetSection;
