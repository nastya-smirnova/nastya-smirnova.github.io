import React from "react";

export const PreviewProjectButtons = () => {
  return (
    <div>
      <div className="buttonsContainer">
        <a
          href="https://github.com/nastya-smirnova/gallery-app"
          target="_blank"
          className="buttonsPreviewProject"
        >
          Code &nbsp; <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://github.com/nastya-smirnova/gallery-app"
          target="_blank"
          className="buttonsPreviewProject"
        >
          Live Demo &nbsp; <FontAwesomeIcon icon={faExternalLink} />
        </a>
      </div>
    </div>
  );
};

export default PreviewProjectButtons;
