import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const TeckStack = () => {
  return (
    <div className="teckStackContainer">
      <h3 className="teckStackHeader">Teck Stack</h3>
      <a href="https://www.javascript.com/">
        <FontAwesomeIcon icon={faJsSquare} />
      </a>
      <a href="https://www.w3.org/Style/CSS/Overview.en.html">
        <FontAwesomeIcon icon={faCss3Alt} />
      </a>
      <a href="https://html5.org/">
        <FontAwesomeIcon icon={faHtml5} />
      </a>
      <a href="https://react.dev/">
        <FontAwesomeIcon icon={faReact} />
      </a>
    </div>
  );
};

export default TeckStack;
