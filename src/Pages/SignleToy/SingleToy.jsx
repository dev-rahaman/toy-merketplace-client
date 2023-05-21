/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import useTitle from "../../Components/Title/Title";

const SingleToy = () => {
  useTitle("Single Toy");
  const loadData = useLoaderData();
  const {
    toyPhoto,
    sellerName,
    name,
    email,
    price,
    rating,
    quantity,
    description,
  } = loadData;

  return (
    <div>
      <div className="single-toy-details">
        <div className="single-toy-details-left">
          <img src={toyPhoto} alt="single image" />
        </div>
        <div className="single-toy-details-right">
          <h2>
            <b>Toy Name: </b> {name}
          </h2>
          <p className="fontSize">
            <b>Seller Name:</b> {sellerName}
          </p>
          <p className="fontSize">
            <b>Email: </b> {email}
          </p>

          <div className="fontSize">
            <FaDollarSign />
            {price}
          </div>
          <p className="fontSize">
            <b>Quantity: </b> {quantity}
          </p>

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
          <p className="fontSize">
            <b>Description</b> {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
