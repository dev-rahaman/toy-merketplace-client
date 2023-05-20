/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const PhotoGallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("https://alive-baby-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: "40px", textAlign: "center", marginTop: "20px" }}>
        Photo Gallery
      </h2>
      <div className="image-gallery">
        {gallery.map((image, idx) => (
          <img key={idx} src={image.toyPhoto} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
