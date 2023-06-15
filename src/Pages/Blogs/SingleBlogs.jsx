/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Components/Title/Title";

const SingleBlogs = () => {
  useTitle("Update Toy");
  const loadData = useLoaderData();
  const { _id, blogPicture, blogTitle, paragraphs, tags } = loadData;

  return (
    <div
      style={{
        width: "95%",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div>
        <img
          src={blogPicture}
          alt=""
          style={{ textAlign: "center", width: "80%", height: "400px" }}
        />
        <h2 style={{ fontSize: "40px" }}>{blogTitle}</h2>
        <div>
          {paragraphs &&
            paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                style={{ fontSize: "25px", textAlign: "left", margin: "15px" }}
              >
                {paragraph}
              </p>
            ))}
        </div>
        <div>
          <strong>Tags:</strong>{" "}
          {tags &&
            tags.map((tag, idx) => (
              <span style={{ padding: "5px", fontSize: "20px" }} key={idx}>
                {tag},
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogs;
