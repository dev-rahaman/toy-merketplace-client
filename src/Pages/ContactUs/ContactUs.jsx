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
import { Link } from "react-router-dom";

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
    fetch("https://alive-baby-server.vercel.app/message", {
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
          style={{ color: "#F93A0B", fontSize: "70px" }}
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
            fontWeight: "bold",
            backgroundColor: "#F93A0B",
            width: "200px",
            height: "50px",
            borderRadius: "50px 50px 50px 0px",
          }}
        >
          <Link
            to={"mailto: 'rsabdurrahamansultany2@gmail.com'"}
            state={{ color: "#212130" }}
          >
            Contact Us
          </Link>
        </button>
      </div>

      <div className="contact_us_bottom_container">
        <div className="Contact-left">
          <div className="dev-left">
            <div className="contact-left-container">
              <div>
                <FaMapMarkerAlt
                  style={{
                    fontSize: "80px",
                    color: "#fff",
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
                    color: "#fff",
                    marginRight: "20px",
                    display: "inline-block",
                  }}
                />
              </div>
              <div style={{ color: "#fff" }}>
                <h3 style={{ fontSize: "40px" }}>Phone:</h3>
                <p className="blog-para">
                  01601313258, 01601313258, 01601313258
                </p>
              </div>
            </div>

            <div className="contact-left-container">
              <div>
                <AiOutlineMail
                  style={{
                    fontSize: "80px",
                    color: "#fff",
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

          <form
            onSubmit={handleMessage}
            className="req-rom"
            id="contact-us-form-container"
          >
            <div className="form-group">
              <label name="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter Your Name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-group">
              <label name="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter Your Email"
                defaultValue={user?.email}
              />
            </div>
            <div className="form-group">
              <label name="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Enter Your Phone"
                defaultValue={user?.phoneNumber}
              />
            </div>
            <div className="form-group">
              <label name="phone">Message:</label>
              <textarea
                name="message"
                id="contact-us-textarea"
                cols="30"
                rows="5"
                placeholder="Message here Optional"
              ></textarea>
            </div>
            <button type="submit" className="ascending">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
