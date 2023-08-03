import React from "react";
import { Link } from "react-scroll";

export const Navigation = () => {
  return (
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
  );
};

export default Navigation;
