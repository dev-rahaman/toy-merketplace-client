/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./RegisterLogin.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../Components/Title/Title";
import { toast } from "react-toastify";

const Register = () => {
  useTitle("Register");
  const [showPass, setShowPass] = useState("password");
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    let email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    const photoURL = e.target.photoURL.value;
    e.target.reset("");

    if (password !== confirm) {
      setError("Your password not match try again");
      return;
    }
    if (password.length < 8) {
      setError("Password must contain 8 characters");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("The password contains an uppercase letter");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("The password contains a lowercase letter");
      return;
    } else if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?])/.test(password)) {
      setError("The password has at least one special character");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setError("Password has at least one number");
      return;
    }
    setError("");

    createUser(email, password).then((result) => {
      const currentUser = result.user;
      updateProfile(currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          toast.success("your account is crated successfully!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setError(error.message);
          //   console.log(error.message);
        });
    });
  };

  const handleShowPass = () => {
    setShowPass(showPass === "password" ? "text" : "password");
  };

  return (
    <div className="login-container">
      <h1>Please Create an Account</h1>
      <form onSubmit={handleRegisterFormSubmit}>
        <label>First Name:</label>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter Email" required />
        <br />
        <label>Password:</label>
        <input
          type={showPass}
          name="password"
          placeholder="Enter Password"
          required
        />
        <span onClick={handleShowPass} style={{ position: "relative" }}>
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
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          required
        />
        <br />
        <label>Photo URL</label>
        <input type="text" name="photoURL" placeholder="Photo URL" required />
        <br />
        <button type="submit">Register</button>
        <p style={{ textAlign: "center" }}>
          Already Have an Account?{" "}
          <Link to="/login" style={{ color: "#254255", fontWeight: "bold" }}>
            Login
          </Link>
        </p>
        <p style={{ color: "red" }}>{error}</p>
      </form>
    </div>
  );
};

export default Register;
