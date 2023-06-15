/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./addtoy.css";
import Select from "react-select";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Components/Title/Title";

const options = [
  { value: "Programmable", label: "Programmable" },
  { value: "Transformable", label: "Transformable" },
  { value: "Educational", label: "Educational" },
];

const AddToy = () => {
  useTitle("Add Toy");
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleToyAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const toyPhoto = form.toyPhoto.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const quantity = form.quantity.value;

    const newToy = {
      name,
      toyPhoto,
      subcategory,
      price,
      rating,
      sellerName,
      email,
      photo,
      quantity,
      description,
    };

    fetch("https://alive-baby-server.vercel.app/addtoy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toy Has Been Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // console.log("toyData is added", data);
      });
  };

  return (
    <div className="toy-container">
      <h1>Add a Toy</h1>
      <form onSubmit={handleToyAdd}>
        <div className="flex">
          <div style={{ width: "50%", margin: "0 20px" }}>
            <label>Toy Name:</label>
            <input
              type="text"
              placeholder="Enter Toy Name"
              name="name"
              required
            />
            <br />
            <label>Toy Photo:</label>
            <input
              type="text"
              placeholder="Enter Toy Photo URL"
              name="toyPhoto"
              required
            />
            <br />
            <label>Sub Category:</label>
            <div className="select">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                name="subcategory"
                required
              />
            </div>
            <br />
            <label>Price:</label>
            <input type="text" name="price" placeholder="Price" required />
            <br />
            <label>Rating</label>
            <input type="text" name="rating" placeholder="Rating" required />
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              required
            />
            <br />
          </div>

          <div style={{ width: "50%", margin: "0 20px" }}>
            <label>Your Name:</label>
            <input
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              required
              defaultValue={user?.displayName}
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              defaultValue={user?.email}
            />
            <br />
            <label>Picture:</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Picture URL"
              required
              defaultValue={user?.photoURL}
            />
            <label>Description</label>
            <textarea
              rows="10"
              type="text"
              name="description"
              placeholder="Description"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit">Add A Toy</button>
      </form>
    </div>
  );
};

export default AddToy;
