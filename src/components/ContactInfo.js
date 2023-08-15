import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/ContactInfo.css";

export const ContactInfo = () => {
  return (
    <footer className="footerContainer" id="contacts">
      <div className="footerContentContainer">
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
      </div>
    </footer>
  );
};

export default ContactInfo;
