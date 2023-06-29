import "./App.css";
import "./avatar.png";
import "./galleryApp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faInstagram,
  faJsSquare,
  faLinkedin,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLink,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import "./MediaQuery.css";

const App = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="app">
      <header className="headerContainer">
        <h3 className="logoContainer">NaSmi.dev </h3>

        <nav className="navigationLinksContainer">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="home">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                Projects
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mainContentContainer">
        <section id="home"></section>
        <div className="greetContainer">
          <div className="avatarContainer">
            <img
              className="avatar"
              src={require("./avatar.png")}
              alt="Nasmi's avatar"
            />
          </div>
          <div className="selfPresContainer">
            <h1 className="headerGreeting">Front-End React Developer 👋</h1>
            <p className="textGreeting">
              Hi, I'm Nastya Smirnova. A Passionate Front-end React Developer
              based in Ukraine 📍
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
            </div>
          </div>
        </div>
        <div className="teckStackContainer">
          <h3>Teck Stack</h3>
          <a href="#">
            <FontAwesomeIcon icon={faJsSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCss3Alt} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faHtml5} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faReact} />
          </a>
        </div>
        <div className="aboutMeContainer">
          <section id="about"></section>
          <img
            className="aboutMeImageContainer"
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Nasmi's avatar"
          />
          <div className="aboutMeTextContainer">
            <h3 className="aboutMeHeaderText">About Me</h3>
            <h4>A dedicated front-end Developer based in Ukraine 📍</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div>
          <section id="projects"></section>
          <h3 className="portfolioHeader">Portfolio</h3>
          <h4 className="portfolioTitle ">
            Each project is unique piece of development 🧩{" "}
          </h4>
          <div className="portfolioContainer">
            <img
              className="portfolioImageContainer"
              src={require("./galleryApp.png")}
              alt="Gallery App preview"
            />
            <div className="projectDescriptionTextContainer">
              <h4 className="projectDescriptionText"> Gallery App 🎞 </h4>
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
              <div className="usedToolsContainer">
                <FontAwesomeIcon className="usedTools" icon={faReact} />
                <FontAwesomeIcon className="usedTools" icon={faJsSquare} />
                <FontAwesomeIcon className="usedTools" icon={faCss3Alt} />
                <FontAwesomeIcon className="usedTools" icon={faHtml5} />
              </div>
              <div className="buttonsContainer">
                <div>
                  <button
                    className="buttonsPreviewProject"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/nastya-smirnova/gallery-app"
                      )
                    }
                  >
                    Code <FontAwesomeIcon icon={faGithub} />
                  </button>
                </div>
                <div>
                  <button
                    className="buttonsPreviewProject"
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/nastya-smirnova/gallery-app#readme"
                      )
                    }
                  >
                    Live Demo <FontAwesomeIcon icon={faExternalLink} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footerContainer">
        <section id="contacts"></section>
        <p className="contactsHeader">Contacts</p>
        <p className="dontBeShyText">Don't be shy! Hit me up!🤝</p>
        <a
          href="mailto:smirnova.anastasia.k@gmail.com?cc=smirnowa.anastasiia@gmail.com&subject=Email to Anastasia"
          target="_blank"
          className="email"
        >
          smirnova.anastasia.k@gmail.com{" "}
          <FontAwesomeIcon icon={faMailForward} />
        </a>
        <p>Anastasia Smirnova © 1998 - 2023</p>
      </footer>
    </div>
  );
};

export default App;
