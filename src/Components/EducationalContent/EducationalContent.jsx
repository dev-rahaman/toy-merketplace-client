/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import { FcRating } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";

const EducationalContent = ({ card }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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
  const { _id, toyPhoto, name, price, rating, description } = card;
  card.splice;
  return (
    <div className="card" data-aos="fade-left">
      <div>
        <img src={toyPhoto} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <span
          className="fontSize"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#DCAB12"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="none"
            style={{ width: "25px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          {rating}
        </span>
        <p className="price">
          <FaDollarSign /> {price}
        </p>
        <p>
          <b>Description:</b> {description.slice(0, 50)}...
        </p>
        <button onClick={handleViewDetails} className="ascending">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EducationalContent;
