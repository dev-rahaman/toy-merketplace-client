/* eslint-disable no-unused-vars */
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.js";
import man from "../../../public/man.png";
AOS.init();

const MyAOS = () => {
  return (
    <>
      <div>
        {/* left */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FD3C5E",
          }}
        >
          <div>
            <img src={man} alt="" />
          </div>
          <div>
            <h2>
              Robot Toy: Unlocking Imagination and Fun! 🤖✨ Experience endless
              excitement with our interactive Robot Toy. Its sleek design and
              advanced features make playtime a captivating adventure. Watch as
              your childs creativity flourishes while they engage in imaginative
              play, programming movements, and solving challenges. With its
              interactive responses and educational benefits, our Robot Toy
              sparks learning and entertainment in one compact package. Discover
              a world of wonder and joy with our Robot Toy, the perfect
              companion for little innovators!
            </h2>
          </div>
        </div>
        {/* right  */}
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#B0E54C",
          }}
        >
          <div>
            <h2>
              Robot Toy: Unlocking Imagination and Fun! 🤖✨ Experience endless
              excitement with our interactive Robot Toy. Its sleek design and
              advanced features make playtime a captivating adventure. Watch as
              your childs creativity flourishes while they engage in imaginative
              play, programming movements, and solving challenges. With its
              interactive responses and educational benefits, our Robot Toy
              sparks learning and entertainment in one compact package. Discover
              a world of wonder and joy with our Robot Toy, the perfect
              companion for little innovators!
            </h2>
          </div>
          <div>
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAOS;
