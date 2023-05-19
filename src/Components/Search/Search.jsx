/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../Pages/AddToy/addtoy.css";

const Search = () => {
  const [searchText, setSearchText] = useState();

  console.log(searchText);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
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
          style={{ padding: "20px", fontSize: "20px", cursor: "pointer" }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
