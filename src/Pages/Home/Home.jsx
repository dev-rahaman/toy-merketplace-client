/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../../Components/Slider/Slider";
import Tabs from "../../Components/Tabs/Tabs";
import PhotoGallery from "../../Components/PhotoGellary/PhotoGallery";
import useTitle from "../../Components/Title/Title";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <PhotoGallery></PhotoGallery>
      <Tabs></Tabs>
    </div>
  );
};

export default Home;
