/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const TransformableContent = ({ card }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, toyPhoto, name, price, rating, description } = card;

  const handleViewDetails = () => {
    if (user) {
      navigate(`/toy/${_id}`);
    } else {
      Swal.fire({
        title: "You have to log in first to view details",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(`/login`);
    }
  };

  return (
    <div className="card" data-aos="fade-left">
      <div>
        <img src={toyPhoto} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p className="rating">Rating: {rating}</p>
        <p className="price">Price: {price}</p>
        <p>{description}</p>
        <button onClick={handleViewDetails} className="ascending">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TransformableContent;
