/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const TransformableContent = ({ card }) => {
  const { _id, toyPhoto, name, price, rating, description } = card;
  return (
    <div className="card" data-aos="fade-right">
      <img src={toyPhoto} alt="" className="card-img" />
      <h3>{name}</h3>
      <p className="rating">Rating: {rating}</p>
      <p className="price">Price: {price}</p>
      <p>{description}</p>
      <Link to={`/toy/${_id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default TransformableContent;
