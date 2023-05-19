/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    {
      image: "https://i.postimg.cc/jqfjpw0r/toy8.jpg",
      caption: "Homemade Margherita Pizza 2",
    },
    {
      image: "https://i.postimg.cc/qMd74J46/toy7.jpg",
      caption: "Spicy Chicken Curry 1",
    },
    {
      image: "https://i.postimg.cc/3Jbb2RNd/toy10.jpg",
      caption: "Bacon Wrapped Dates 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const rightSlide = () => {
    setCurrentSlide(
      currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1
    );
  };

  const leftSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? sliderImages.length - 1 : currentSlide - 1
    );
  };

  const handleDot = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-image-container">
          {sliderImages &&
            sliderImages.map((img, index) => (
              <div
                key={index}
                className={`slider-image ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <img src={img.image} alt="" className="images" />
                <div className="slider-caption">{img.caption}</div>
              </div>
            ))}
        </div>
        <div className="slider-controls">
          <button className="slider-control" onClick={leftSlide}>
            &lt;
          </button>
          <button className="slider-control" onClick={rightSlide}>
            &gt;
          </button>
        </div>
        <div className="dot-container">
          {sliderImages.map((n, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDot(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
