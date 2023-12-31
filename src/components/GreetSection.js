import React from "react";
import avatarImg from "../images/avatar.png";

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/GreetSection.css";

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
        <div className="socialMediaLinksContainer">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/anastasia-smirnova-9b8931205/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="twitter" href="https://twitter.com/NaSmi10346751">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="gitHub"
            href="https://github.com/nastya-smirnova?tab=overview&from=2023-06-01&to=2023-06-21"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/nasmi__nasmi/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="tiktok"
            href="https://www.tiktok.com/@nasmi__nasmi?_d=secCgYIASAHKAESPgo8W3mGzGV%2B1gntbYnS0doE1b206D92A1CV106gf%2FydyW6GHqjrvfSpUO51VsFYCVTwfiEdJoDJNL4L1hYoGgA%3D&_r=1&checksum=8c0079746f00fe1cb49fbdd2dcf4457b8cd49e5486cc469955ca9088bdbf6fad&language=en&sec_uid=MS4wLj"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GreetSection;
