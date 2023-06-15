/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useTitle from "../../Components/Title/Title";
import BlogCart from "./BlogCart";

const Blogs = () => {
  useTitle("Blogs");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="blog">
      {blogs &&
        blogs.map((blog, idx) => <BlogCart key={idx} blog={blog}></BlogCart>)}
    </div>
  );
};

export default Blogs;
