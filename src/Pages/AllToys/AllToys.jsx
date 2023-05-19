/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import viewDetails from "../../../public/viewDetails.png";
import useTitle from "../../Components/Title/Title";

const AllToys = () => {
  const [allToy, setAllToy] = useState([]);
  useEffect(() => {
    fetch("https://alive-baby-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        // console.log(data);
      });
  }, []);

  const [searchText, setSearchText] = useState();
  const handleSearchBtn = () => {
    fetch(`http://localhost:8080/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        // console.log(data);
      });
  };

  const loadData = useLoaderData();

  useTitle("All Toys");
  const titleStyle = {
    backgroundColor: "red",
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
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="Search"
          placeholder="Search By Toy Name"
          name="search"
          required
          style={{ padding: "20px", fontSize: "20px", width: "40    0px" }}
        />
        <button
          onClick={handleSearchBtn}
          style={{ padding: "20px", fontSize: "20px", cursor: "pointer" }}
        >
          Search
        </button>
      </div>

      <table>
        <tr>
          <th>Seller Name </th>
          <th>Toy Name</th>
          <th>Sub-category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
        {allToy.map((toy) => (
          <>
            <tr>
              <td>{toy.sellerName}</td>
              <td>{toy.name}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <Link to={`/toy/${toy._id}`}>
                  <button
                    title="View Details"
                    style={{
                      titleStyle,
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
  );
};

export default AllToys;
