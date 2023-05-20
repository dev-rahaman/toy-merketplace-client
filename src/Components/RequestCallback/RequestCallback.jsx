/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const RequestCallback = () => {
  const { user } = useContext(AuthContext);

  const handleMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const newMessage = { name, email, phone };

    fetch("http://localhost:8080/message", {
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
      <h2 style={{ fontSize: "40px", textAlign: "center", marginTop: "20px" }}>
        Send A Message
      </h2>
      <form onSubmit={handleMessage} className="req-rom">
        <div className="form-group">
          <label name="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
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
            defaultValue={user?.phoneNumber}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RequestCallback;
