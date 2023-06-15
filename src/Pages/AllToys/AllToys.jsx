/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import viewDetails from "../../../public/viewDetails.png";
import useTitle from "../../Components/Title/Title";

const AllToys = () => {
  useTitle("All Toys");
  const [searchText, setSearchText] = useState();
  const [allToy, setAllToy] = useState([]);
  useEffect(() => {
    fetch("https://alive-baby-server-rs-rahaman.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        // console.log(data);
      });
  }, []);

  const handleSearchBtn = (e) => {
    e.preventDefault();
    fetch(
      `https://alive-baby-server-rs-rahaman.vercel.app/toySearchByName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        // console.log(data);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "40px", marginTop: "30px" }}>
        All Toys
      </h2>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSearchBtn}>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="Search"
            placeholder="Search By Toy Name"
            name="search"
            required
            style={{ padding: "10px", fontSize: "15px", width: "20rem" }}
          />
          <button
            style={{ padding: "10px", fontSize: "15px", cursor: "pointer" }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="table-container">
        <table>
          <tr>
            <td>#</td>
            <th>Seller Name </th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
          {allToy.map((toy, idx) => (
            <>
              <tr>
                <td>{idx + 1}</td>
                <td>{toy?.sellerName}</td>
                <td>{toy?.name}</td>
                <td>{toy?.subcategory}</td>
                <td>{toy?.price}</td>
                <td>{toy?.quantity}</td>
                <td>
                  <Link to={`/toy/${toy._id}`}>
                    <button
                      title="View Details"
                      style={{
                        backgroundImage: `url(${viewDetails})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "25px",
                        height: "25px",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    ></button>
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
