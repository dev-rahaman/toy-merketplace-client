/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const TransformableContent = ({ card }) => {
  const { user } = useContext(AuthContext);
  const { _id, toyPhoto, name, price, rating, description } = card;

  const handleViewDetails = () => {
    console.log("clicked");
    if (user) {
      Navigate(`/toy/${_id}`);
    } else {
      toast("You have to log in first to view details");
    }
  };

  return (
    <div className="card" data-aos="fade-right">
      <img src={toyPhoto} alt="" className="card-img" />
      <h3>{name}</h3>
      <p className="rating">Rating: {rating}</p>
      <p className="price">Price: {price}</p>
      <p>{description}</p>

      {/* <Link to={`/toy/${_id}`}> */}
      <button onClick={handleViewDetails}>View Details</button>
      {/* </Link> */}
      {/* toast("You have to log in first to view details") */}
    </div>
  );
};

export default TransformableContent;
