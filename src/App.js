import "./App.css";
import "./MediaQuery.css";

import Header from "./components/Header";

import ContactInfo from "./components/ContactInfo";
import AboutMe from "./components/AboutMe";
import TeckStack from "./components/TeckStack";
import GreetSection from "./components/GreetSection";
import Portfolio from "./components/Portfolio";

const App = () => {
  console.log(new Date().getFullYear());

  return (
    <div className="app">
      <Header />
      <div className="appMainContent">
        <main className="mainContentContainer" id="home">
          <GreetSection />
          <TeckStack />
          <AboutMe />
          <Portfolio />
        </main>
      </div>
      <ContactInfo />
    </div>
  );
};

export default App;
