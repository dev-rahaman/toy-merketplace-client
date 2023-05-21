/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import error from "../../../public/error.gif";
import useTitle from "../../Components/Title/Title";

const Error = () => {
  useTitle("404");
  return (
    <div style={{ position: "relative" }}>
      <img src={error} alt="" className="error-image" />
      <Link to="/">
        <button className="error-btn">Back To Home</button>
      </Link>
    </div>
  );
};

export default Error;
