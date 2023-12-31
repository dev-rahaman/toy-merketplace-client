/* eslint-disable no-unused-vars */
import React from "react";
import Tabs from "../../Components/Tabs/Tabs";
import PhotoGallery from "../../Components/PhotoGellary/PhotoGallery";
import useTitle from "../../Components/Title/Title";
import MyAOS from "../../Components/AOS/MyAOS";
import RequestCallback from "../../Components/RequestCallback/RequestPro";
import Banner from "../../Components/Banner/Banner";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <PhotoGallery></PhotoGallery>
      <Tabs></Tabs>
      <Slider></Slider>
      <MyAOS></MyAOS>
      <RequestCallback></RequestCallback>
    </div>
  );
};

export default Home;
