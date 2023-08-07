import "./App.css";
import "./MediaQuery.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import galleryAppImg from "./images/galleryApp.png";
import landingPageImg from "./images/landingPage.png";

import UsedTools from "./components/UsedTools";

import Header from "./components/Header";
// import PreviewProjectButtons from "./components/PreviewProjectButtons";
import ContactInfo from "./components/ContactInfo";
import AboutMe from "./components/AboutMe";
import TeckStack from "./components/TeckStack";
import GreetSection from "./components/GreetSection";

const App = () => {
  console.log(new Date().getFullYear());

  return (
    <div className="app">
      <Header />
      <main className="mainContentContainer" id="home">
        <GreetSection />
        <TeckStack />
        <AboutMe />
        <div id="projects">
          <h2 className="portfolioHeader">Portfolio</h2>
          <h4 className="portfolioTitle">
            Each project is unique piece of development 🧩
          </h4>
          <div className="portfolioContainer">
            <img
              className="portfolioImageContainer"
              src={galleryAppImg}
              alt="Gallery App preview"
            />
            <div className="projectDescriptionTextContainer">
              <h4 className="projectHeaderText">Gallery App 🎞</h4>
              <p>
                🎞 A Gallery App is a digital tool designed to add, organize,
                view images, and delete your pictures or photographs.
                <ul>
                  <h4>Key Features:</h4>
                  <li>Add your favourite image using the link </li>
                  <li>Look through your images using Lightbox</li>
                  <li>Delete remove irrelevant pictures from your gallery </li>
                  <li>Can be used both on PC and mobile devices</li>
                </ul>
              </p>
              <UsedTools />

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
          </div>
          <div>
            <div className="portfolioContainer" id="projects">
              <img
                className="portfolioImageContainer"
                src={landingPageImg}
                alt="Landing Page preview"
              />
              <div className="projectDescriptionTextContainer">
                <h4 className="projectHeaderText"> Landing Page 🛩 </h4>
                <p>
                  🛩 A landing page is the webpage visitors land on immediately
                  after clicking links in: email marketing campaigns, search
                  engine results, social media advertisements.
                </p>
                <UsedTools />

                <div className="buttonsContainer">
                  <div>
                    <a
                      href="https://github.com/nastya-smirnova/landing-page-app"
                      target="_blank"
                      className="buttonsPreviewProject"
                    >
                      Code &nbsp; <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/nastya-smirnova/landing-page-app#readme"
                      target="_blank"
                      className="buttonsPreviewProject"
                    >
                      Live Demo &nbsp; <FontAwesomeIcon icon={faExternalLink} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactInfo />
    </div>
  );
};

export default App;
