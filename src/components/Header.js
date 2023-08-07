import React from "react";
import Navigation from "./Navigation";
import "../components/Header.css";

export const Header = () => {
  return (
    <header className="headerContainer">
      <h3 className="logoContainer">NaSmi.dev</h3>
      <Navigation />
    </header>
  );
};

export default Header;
