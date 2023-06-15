/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

const BlogCart = ({ blog }) => {
  const { _id, blogPicture, blogTitle } = blog;
  return (
    <div>
      <div className="fist__blog">
        <div className="blog__img">
          <img
            src={blogPicture}
            alt="fist-blog"
            width="350px"
            height={"250px"}
          />
        </div>
        <div className="blog-date">
          <p>December 20, 2022</p>
        </div>
        <div className="blog__heading">
          <h2>{blogTitle}</h2>
        </div>
        <div className="blog__btn">
          <Link to={`/blog/${_id}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
