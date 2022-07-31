import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>IIITDM Hall 1 Jabalpur India</p>
              <p></p>
            </div>
            <div className="Phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                +918269711075
              </h4>
            </div>
            <div className="mail">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                barmann203@gmail.com
              </h4>
            </div>
          </div>
        </div>

        <div className="right">
          <h1>To Connect</h1>
          <div className="social">
            <a href="https://www.linkedin.com/in/nikhil-barman-1b9450193">
              <i className="fa fa-linkedin"></i>
            </a>

            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              <i className="fa fa-google-plus-square"></i>
            </a>

            <a href="https://twitter.com/Nikhil007134?s=08">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
