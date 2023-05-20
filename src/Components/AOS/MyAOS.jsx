/* eslint-disable no-unused-vars */
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.js";
import man from "../../../public/man.png";
import robot2 from "../../../public/robot2.png";
AOS.init();
const polygonClipPath = "polygon(0 0, 100% 0, 100% 92%, 0 100%)";
const polygonClipPath2 = "polygon(0 8%, 100% 0, 100% 100%, 0 100%)";

const MyAOS = () => {
  return (
    <>
      <div>
        <h2
          style={{ fontSize: "40px", textAlign: "center", marginTop: "20px" }}
        >
          About
        </h2>
        {/* left */}
        <div
          data-aos="fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#FD3C5E",
            height: "500px",
            clipPath: polygonClipPath,
          }}
        >
          <div>
            <img src={man} alt="" width={"300px"} />
          </div>
          <div
            style={{
              width: "700px",
              color: "#fff",
              fontSize: "20px",
              lineHeight: "40px",
            }}
          >
            <p>
              Robot Toy: Unlocking Imagination and Fun! 🤖✨ Experience endless
              excitement with our interactive Robot Toy. Its sleek design and
              advanced features make playtime a captivating adventure. Watch as
              your childs creativity flourishes while they engage in imaginative
              play, programming movements, and solving challenges. With its
              interactive responses and educational benefits, our Robot Toy
              sparks learning and entertainment in one compact package. Discover
              a world of wonder and joy with our Robot Toy, the perfect
              companion for little innovators!
            </p>
          </div>
        </div>
        {/* right  */}
        <div
          data-aos="fade-right"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#B0E54C",
            height: "500px",
            marginTop: "50px",
            clipPath: polygonClipPath2,
          }}
        >
          <div
            style={{
              width: "700px",
              color: "#000",
              fontSize: "20px",
              lineHeight: "40px",
            }}
          >
            <p>
              Unlock a World of Wonder with Our Robotic Companion! 🤖✨
              Introducing our Robot Toy, a gateway to boundless adventures and
              discoveries. This captivating companion combines entertainment and
              education, fostering problem-solving skills and igniting
              imaginative play. With its sleek design and interactive features,
              it sparks curiosity in young minds, propelling them into a realm
              of futuristic fun. Watch as their faces light up with excitement
              as they navigate obstacles and unleash their creativity. Join the
              robotics revolution and embrace the joy of learning with our
              incredible Robot Toy!
            </p>
          </div>
          <div>
            <img src={robot2} alt="" width={"300px"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAOS;
