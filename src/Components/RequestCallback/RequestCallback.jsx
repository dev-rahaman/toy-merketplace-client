/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const RequestCallback = () => {
  const { user } = useContext(AuthContext);

  const handleRequestCallback = () => {
    console.log("handleRequestCallback");
  };

  return (
    <form className="req-rom">
      <div className="form-group">
        <label name="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label name="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label name="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RequestCallback;
