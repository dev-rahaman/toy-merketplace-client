/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import { FcRating } from "react-icons/fa";
import { toast } from "react-toastify";

const EducationalContent = ({ card }) => {
  const { user } = useContext(AuthContext);
  const { _id, toyPhoto, name, price, rating, description } = card;
  return (
    <div className="card" data-aos="fade-left">
      <img src={toyPhoto} alt="" className="card-img" />
      <h3>{name}</h3>
      <p className="rating">Rating: {rating}</p>
      <p className="price">Price: {price}</p>
      <p>{description}</p>
      {user ? (
        <Link to={`/toy/${_id}`}>
          <button>View Details</button>
        </Link>
      ) : (
        toast("You have to log in first to view details")
      )}
    </div>
  );
};

export default EducationalContent;
