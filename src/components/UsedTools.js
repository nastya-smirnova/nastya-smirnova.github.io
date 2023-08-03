import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const UsedTools = () => {
  return (
    <div className="usedToolsContainer">
      <ul>
        <li>
          <FontAwesomeIcon className="usedTools" icon={faReact} />
        </li>
        <li>
          <FontAwesomeIcon className="usedTools" icon={faJsSquare} />
        </li>
        <li>
          <FontAwesomeIcon className="usedTools" icon={faCss3Alt} />
        </li>
        <li>
          <FontAwesomeIcon className="usedTools" icon={faHtml5} />
        </li>
      </ul>
    </div>
  );
};

export default UsedTools;
