/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import viewDetails from "../../../public/viewDetails.png";
import useTitle from "../../Components/Title/Title";

const AllToys = () => {
  //   fetch("https://alive-baby-server.vercel.app/alltoys", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify()
  //   })
  //     .then((res) => res.jos())
  //     .then((data) => {
  //       console.log(data);
  //     });
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
      <table>
        <tr>
          <th>Seller Name </th>
          <th>Toy Name</th>
          <th>Sub-category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
        {loadData.map((toy) => (
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
{
  /* <img
src={viewDetails}
alt=""
style={{
  width: "25px",
  height: "25px",
}}
/> */
}
