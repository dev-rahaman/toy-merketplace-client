/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../Components/Title/Title";

const Login = () => {
  const { loginUser, GoogleSignIn } = useContext(AuthContext);
  useTitle("Login");
  const [showPass, setShowPass] = useState("password");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [lodging, setLodging] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset("");

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // const handleGoogleSignIn = () => {
  //   GoogleSignIn()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .then((error) => {
  //       console.log(error.message);
  //     });
  // };

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        // toast.success("Login successfully!");
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  const handleShowPassword = () => {
    setShowPass(showPass === "password" ? "text" : "password");
  };

  return (
    <div className="login-container">
      <h1> Login </h1>
      <form onSubmit={handleLoginFormSubmit}>
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Password:</label>
        <input type={showPass} name="password" />
        <span onClick={handleShowPassword} style={{ position: "relative" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              width: "20px",
              position: "absolute",
              top: "-35px",
              left: "300px",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <br />
        <button type="submit">Login</button>
        <p style={{ color: "red" }}>{error}</p>
      </form>
      <p style={{ textAlign: "center" }}>
        Create an new account{" "}
        <Link to="/register" style={{ color: "#254255", fontWeight: "bold" }}>
          Register
        </Link>
      </p>
      <div>
        <button onClick={handleGoogleSignIn} style={{ marginTop: "20px" }}>
          <p style={{ marginLeft: "5px" }}>
            <FaGoogle /> Sign-in with Google
          </p>
        </button>
      </div>
    </div>
  );
};

export default Login;
