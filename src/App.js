import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faInstagram,
  faJsSquare,
  faLinkedin,
  faReact,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLink,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import avatarImg from "./images/avatar.png";
import galleryAppImg from "./images/galleryApp.png";
import landingPageImg from "./images/landingPage.png";
import workspaceImg from "./images/workspace.png";

import "./MediaQuery.css";
import UsedTools from "./components/UsedTools";
import SocialMediaLinks from "./components/SocialMediaLinks";

import Header from "./components/Header";

const App = () => {
  console.log(new Date().getFullYear());

  return (
    <div className="app">
      <Header />

      <main className="mainContentContainer" id="home">
        <div className="greetContainer">
          <div className="avatarContainer">
            <img className="avatar" src={avatarImg} alt="Nasmi's avatar" />
          </div>
          <div className="selfPresContainer">
            <h1 className="headerGreeting">Front-End React Developer 👋</h1>
            <p className="textGreeting">
              Hi, I'm Nastya Smirnova. A Passionate Front-end React Developer
              based in Ukraine 📍
            </p>
            <SocialMediaLinks />
          </div>
        </div>
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
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript and React. I excel in designing
              and maintaining responsive websites that offer a smooth user
              experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team
              player who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
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
      <footer className="footerContainer" id="contacts">
        <p className="contactsHeader">Contacts</p>
        <p className="dontBeShyText">Don't be shy! Hit me up!🤝</p>
        <a
          href="mailto:smirnova.anastasia.k@gmail.com?cc=smirnowa.anastasiia@gmail.com&subject=Email to Anastasia"
          target="_blank"
          className="email"
        >
          smirnova.anastasia.k@gmail.com &nbsp;
          <FontAwesomeIcon icon={faPaperPlane} />
        </a>
        <p className="copyrightText">
          Anastasia Smirnova &copy; 1998 - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
