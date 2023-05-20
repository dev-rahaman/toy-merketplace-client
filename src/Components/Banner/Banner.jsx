/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../../public/Banner-Robot.png";
import "./Banner.css";
import TextSlider from "../TextSlider/TextSlider";

const Banner = () => {
  const texts = [
    "RoboPlay: Unleash the Fun with Our Interactive Robot Toy",
    "MechanoBot: Building Imagination and Adventure in a Robot Toy",
    "TechTrek: Discover the Future of Play with Our Robot Toy Companion",
    "RoboBuddy: Your Loyal Robotic Sidekick for Endless Entertainment",
    "CyberSpark: Ignite Creativity and Learning with Our Robotic Toy Marvel",
    "BotBlaster: Experience Action-Packed Excitement with Our Robot Toy Warrior",
    "RoboExplorer: Embark on Epic Adventures with Our Exploratory Robot Toy",
    "AI WonderBot: Infusing Artificial Intelligence into the Ultimate Toy Experience",
    "RoboMakers: Empowering Young Minds to Innovate with Our Robot Toy Kit",
    "SmartBot: Revolutionizing Playtime with Our Cutting-Edge Robotic Toy",
  ];

  return (
    <div>
      <div className="banner-container">
        <div className="Banner-left">
          <TextSlider texts={texts}></TextSlider>
        </div>
        <div data-aos="fade-down" className="Banner-right">
          <img src={banner} alt="" className="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
