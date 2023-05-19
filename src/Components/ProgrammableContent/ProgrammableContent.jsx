/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ProgrammableContent = ({ card }) => {
  const { _id, toyPhoto, name, rating, description } = card;
  return (
    <div className="card">
      <img src={toyPhoto} alt="" className="card-img" />
      <h3>{name}</h3>
      <p className="rating">{rating}</p>
      <p>{description}</p>
      <Link to={`/toy/${_id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProgrammableContent;
