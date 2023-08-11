import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export const PreviewProjectButtons = ({ codeUrl, previewUrl }) => {
  return (
    <>
      <div className="buttonsContainer">
        <a href={codeUrl} target="_blank" className="buttonsPreviewProject">
          Code &nbsp; <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href={previewUrl} target="_blank" className="buttonsPreviewProject">
          Live Demo &nbsp; <FontAwesomeIcon icon={faExternalLink} />
        </a>
      </div>
    </>
  );
};

export default PreviewProjectButtons;
