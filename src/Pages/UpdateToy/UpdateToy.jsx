/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {} from "react-select";
import Select from "react-select";
import Swal from "sweetalert2";
import useTitle from "../../Components/Title/Title";

const options = [
  { value: "Programmable", label: "Programmable" },
  { value: "Transformable", label: "Transformable" },
  { value: "Educational", label: "Educational" },
];

const UpdateToy = () => {
  useTitle("Update Toy");
  const loadData = useLoaderData();
  const {
    _id,
    name,
    subcategory,
    price,
    rating,
    sellerName,
    email,
    photo,
    quantity,
    description,
  } = loadData;

  const [selectedOption, setSelectedOption] = useState(null);

  const handleToyUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const quantity = form.quantity.value;

    const updatedToy = {
      name: name,
      subcategory: subcategory,
      price: price,
      rating: rating,
      sellerName: sellerName,
      email: email,
      photo: photo,
      description: description,
      quantity: quantity,
    };

    // updated data on server
    fetch(`https://alive-baby-server.vercel.app/updatetoy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          if (data.modifiedCount > 0) {
            Swal.fire("Updated!", "Your file has been Updated.", "success");
          }
        }
      });
  };

  return (
    <div className="toy-container">
      <h1>Update a Toy</h1>
      <form onSubmit={handleToyUpdate}>
        <div className="flex">
          <div style={{ width: "50%", margin: "0 20px" }}>
            <label>Toy Name:</label>
            <input
              type="text"
              placeholder="Enter Toy Name"
              name="name"
              required
              defaultValue={name}
            />
            <br />
            <label>Sub Category:</label>
            <div className="App">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                name="subcategory"
                required
                defaultInputValue={subcategory}
              />
            </div>
            <br />
            <label>Price:</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              required
              defaultValue={price}
            />
            <br />
            <label>Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              required
              defaultValue={rating}
            />
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              required
              defaultValue={quantity}
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
              defaultValue={sellerName}
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              defaultValue={email}
            />
            <br />
            <label>Picture:</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Picture URL"
              required
              defaultValue={photo}
            />
            <label>Description</label>
            <textarea
              rows="10"
              type="text"
              name="description"
              placeholder="Description"
              required
              defaultValue={description}
            ></textarea>
          </div>
        </div>
        <button type="submit">Update Toy</button>
      </form>
    </div>
  );
};

export default UpdateToy;
