/* eslint-disable no-unused-vars */
import "./contact-us.css";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaMobileAlt,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  const { user } = useContext(AuthContext);

  const handleMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const newMessage = { name, email, phone };
    e.target.reset("");
    fetch("https://alive-baby-server-rs-rahaman.vercel.app/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Message Sand Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // console.log(data);
      });
  };
  return (
    <>
      <div className="contact-us-container">
        <h2
          className="heading-blog"
          style={{ color: "#2FC8DF", fontSize: "70px" }}
        >
          Contact Us
        </h2>
        <p
          className="blog-para"
          style={{ width: "50%", textAlign: "center", margin: "20px 0" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          className="ascending"
          style={{
            color: "#212130",
            fontWeight: "bold",
            backgroundColor: "#2FC8DF",
            width: "200px",
            height: "50px",
            borderRadius: "50px 50px 50px 0px",
          }}
        >
          Contact Us
        </button>
      </div>

      <div className="Contact-left">
        <div className="dev-left">
          <div className="contact-left-container">
            <div>
              <FaMapMarkerAlt
                style={{
                  fontSize: "80px",
                  color: "#8ed9ff",
                  marginRight: "20px",
                  display: "inline-block",
                }}
              />
            </div>
            <div style={{ color: "#fff" }}>
              <h3 style={{ fontSize: "40px" }}>Location:</h3>
              <p className="blog-para">
                Kaneshtala Sadar Dakhshin Comilla Bangladesh
              </p>
            </div>
          </div>

          <div className="contact-left-container">
            <div>
              <FaMobileAlt
                style={{
                  fontSize: "80px",
                  color: "#8ed9ff",
                  marginRight: "20px",
                  display: "inline-block",
                }}
              />
            </div>
            <div style={{ color: "#fff" }}>
              <h3 style={{ fontSize: "40px" }}>Phone:</h3>
              <p className="blog-para">01601313258, 01601313258, 01601313258</p>
            </div>
          </div>

          <div className="contact-left-container">
            <div>
              <AiOutlineMail
                style={{
                  fontSize: "80px",
                  color: "#8ed9ff",
                  marginRight: "20px",
                  display: "inline-block",
                }}
              />
            </div>
            <div style={{ color: "#fff" }}>
              <h3 style={{ fontSize: "40px" }}>Email:</h3>
              <p className="blog-para">
                rsabdurrahamansultany2@gmail.com,
                rsabdurrahamansultany3@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="Contact-right">
          <form>
            <label name="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label name="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label name="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label name="message">Message:</label>
            <textarea id="message" name="message" rows="" required></textarea>
            <input type="submit" value="Submit" className="ascending" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
