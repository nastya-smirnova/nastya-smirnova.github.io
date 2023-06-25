import "./App.css";
import "./avatar.png";
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

function App() {
  return (
    <div className="app">
      <header className="headerContainer">
        <h3 className="logoContainer">NaSmi.dev </h3>
        <div className="navigationLinksContainer">
          <a href="#">Home </a>
          <a href="#">About </a>
          <a href="#">Projects </a>
          <a href="#">Contacts </a>
        </div>
      </header>
      <main className="mainContentContainer">
        <div className="greetContainer">
          <div className="avatarContainer">
            <img
              className="avatar"
              src={require("./avatar.png")}
              alt="Nasmi's avatar"
            />
          </div>
          <div className="selfPresContainer">
            <h1>Front-End React Developer 👋</h1>
            <p>
              Hi, I'm Nastya Smirnova. A Passionate Front-end React Developer
              based in Ukraine 📍
            </p>
            <div className="socialMediaLinksContainer">
              <a
                className="socialMediaIcon"
                href="https://www.linkedin.com/in/anastasia-smirnova-9b8931205/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="socialMediaIcon"
                href="https://twitter.com/NaSmi10346751"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                className="socialMediaIcon"
                href="https://github.com/nastya-smirnova?tab=overview&from=2023-06-01&to=2023-06-21"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="socialMediaIcon"
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
          <img
            className="aboutMeImageContainer"
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Nasmi's avatar"
          />
          <div className="aboutMeTextContainer">
            <h3>About Me</h3>
            <h3>A dedicated front-end Developer based in Ukraine 📍</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="portfolioContainer">
          <h3>Portfolio</h3>
          <h3>Each project is unique piece of development 🧩 </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </main>
      <footer className="footerContainer">
        <p>Contact</p>
        <p>Don't be shy! Hit me up!🤝</p>
        <p>Email, GitHub</p>
        <p>Buy me a coffee</p>
      </footer>
    </div>
  );
}

export default App;
