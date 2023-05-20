/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <Link to="/">
              <h4>BABY ALIVE</h4>
            </Link>
            <p style={{ fontSize: "20px" }}>
              Explore a world of fun and learning with our delightful baby toys.
              Designed to captivate young minds and promote early development,
              our colorful and interactive collection is a must-have for every
              little explorer.
            </p>
          </div>
          <div className="footer-column">
            <h4>Contact Information</h4>
            <div>
              <ul>
                <li>
                  <a href="mailto:rsabdurrahamansultnay@gmail.com">
                    Email: [rsabdurrahamansultany@gmail.com]
                  </a>
                </li>
                <li>
                  {/* <a href="tel:01601313258@gmail.com">Phone: [01601313258]</a> */}
                  <a href="tel:01601313258">Phone: [01601313258]</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <h4>Address</h4>
            <div>
              <p>Kaneshtala Sadar Dakhshin Comilla</p>
            </div>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/rsabdurrahamansultany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#0077B5",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/rs_rahaman_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  style={{ width: "30px", height: "30px", color: "#1D9BF0" }}
                />
              </a>
              <a
                href="https://www.facebook.com/rsabdurrahamansultany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  style={{ width: "30px", height: "30px", color: "#139EF8" }}
                />
              </a>
              <a
                href="https://www.instagram.com/rsabdurrahamansultany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  style={{ width: "30px", height: "30px", color: "#8C40AA" }}
                />
              </a>
              <br />
              <a
                href="https://www.pinterest.com/rsabdurrahamansultany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest
                  style={{ width: "30px", height: "30px", color: "#B7081B" }}
                />
              </a>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", backgroundColor: "#F7F7F7" }}>
          © 2023 [ALIVE BABY]
        </p>
      </footer>
    </>
  );
};

export default Footer;
