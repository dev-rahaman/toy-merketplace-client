/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../../Components/Slider/Slider";
import Tabs from "../../Components/Tabs/Tabs";
import PhotoGallery from "../../Components/PhotoGellary/PhotoGallery";
import useTitle from "../../Components/Title/Title";
import MyAOS from "../../Components/AOS/MyAOS";
import RequestCallback from "../../Components/RequestCallback/RequestCallback";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <Tabs></Tabs>
      <PhotoGallery></PhotoGallery>
      <MyAOS></MyAOS>
      <RequestCallback></RequestCallback>
    </div>
  );
};

export default Home;
