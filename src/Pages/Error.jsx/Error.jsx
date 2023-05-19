/* eslint-disable no-unused-vars */
import React from "react";
// import error = "../../../public/error.gif"
import { Link } from "react-router-dom";
import error from "../../../public/error.gif";
import useTitle from "../../Components/Title/Title";

const Error = () => {
  useTitle("404");
  return (
    <div style={{ position: "relative" }}>
      <img src={error} alt="" className="error-image" />
      <Link to="/">
        {" "}
        <button
          style={{
            fontSize: "40px",
            backgroundColor: "#139ef8",
            borderRadius: "50px",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            padding: "15px",
            cursor: "pointer",
            position: "absolute",
            top: "89%",
            left: "40%",
          }}
        >
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
