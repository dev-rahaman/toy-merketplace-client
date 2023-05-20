/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../../Components/Title/Title";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [emailData, setEmailData] = useState([]);

  const url = `https://alive-baby-server.vercel.app/mytoys/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEmailData(data));
  }, [url]);

  const handleAscending = () => {
    fetch("https://alive-baby-server.vercel.app/ascending")
      .then((res) => res.json())
      .then((data) => {
        setEmailData(data);
        console.log(data);
      });
  };

  const handleDescending = () => {
    fetch("https://alive-baby-server.vercel.app/descending")
      .then((res) => res.json())
      .then((data) => {
        setEmailData(data);
        console.log(data);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this toy?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://alive-baby-server.vercel.app/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = emailData.filter((n) => n._id !== id);
              setEmailData(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "40px", marginTop: "30px" }}>
        My Toys
      </h2>
      <button
        onClick={handleAscending}
        style={{ fontSize: "20px", padding: "10px" }}
      >
        Ascending
      </button>
      <button
        onClick={handleDescending}
        style={{ fontSize: "20px", padding: "10px" }}
      >
        Descending
      </button>
      <div className="table-container">
        <table>
          <tr>
            <th>#</th>
            <th>Seller Name </th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
          {emailData &&
            emailData.map((toy, idx) => (
              <>
                <tr>
                  <td>{idx + 1}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.name}</td>
                  <td>{toy.subcategory}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td style={{ textAlign: "center" }}>
                    <FaTrash
                      onClick={() => handleDelete(toy._id)}
                      style={{
                        width: "20px",
                        height: "30px",
                        color: "#ef8d8d",
                        marginRight: "20px",
                        cursor: "pointer",
                      }}
                    />
                    <Link to={`/updatetoy/${toy._id}`}>
                      <FaEdit
                        style={{
                          width: "25px",
                          height: "30px",
                          color: "#139EF8",
                          cursor: "pointer",
                        }}
                      />
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

export default MyToys;
