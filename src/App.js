import "./App.css";
import "./avatar.png";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-solid-svg-icons";

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
              <SocialIcon
                url="https://www.linkedin.com/in/anastasia-smirnova-9b8931205/"
                network="linkedin"
                bgColor="#0A66C2"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://twitter.com/NaSmi10346751"
                network="twitter"
                bgColor="#ff5a01"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://github.com/nastya-smirnova?tab=overview&from=2023-06-01&to=2023-06-21"
                network="github"
                bgColor="#171515"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://www.instagram.com/nasmi__nasmi/"
                network="instagram"
                bgColor="#C13584"
                style={{ height: 30, width: 30 }}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Teck Stack</p>
          <a href="#">JavaSkript </a>
          <a href="#">CSS </a>
          <a href="#">React </a>
        </div>
        <div className="aboutMeContainer">
          <img
            className="aboutMeImageContainer"
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Nasmi's avatar"
          />
          <div className="avoutMeTextContainer">
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
      </main>
      <footer className="footerContainer">Footer</footer>
    </div>
  );
}

export default App;
