/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../../Components/Banner/Banner.css";

const TextSlider = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, texts]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div className="text-slider">
      <h1 className="banner-left-heading">{texts[currentIndex]}</h1>
      <button
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={nextSlide}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
          height="50px"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            color: "#fff",
            backgroundColor: "#293341",
            padding: "10px",
            borderRadius: "50px",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default TextSlider;
