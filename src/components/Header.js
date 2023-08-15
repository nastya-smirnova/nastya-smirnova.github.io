import React from "react";
import { Link } from "react-scroll";
import "../components/Header.css";

export const Header = () => {
  return (
    <header className="headerContainer">
      <h3 className="logoContainer">NaSmi.dev</h3>
      <nav className="navigationLinksContainer">
        <ul>
          <li className="navigationHover">
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
          </li>
          <li className="navigationHover">
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
          </li>
          <li className="navigationHover">
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
          </li>
          <li className="navigationHover">
            <Link activeClass="active" smooth spy to="contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
