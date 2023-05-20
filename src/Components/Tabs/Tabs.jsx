/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProgrammableContent from "../ProgrammableContent/ProgrammableContent";
import TransformableContent from "../Transformable/TransformableContent";
import EducationalContent from "../EducationalContent/EducationalContent";
import { FaApplePay } from "react-icons/fa";

const Tabs = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Programmable");

  useEffect(() => {
    fetch("https://alive-baby-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const result = toys.filter((n) => n.subcategory == activeTab);

  const Programmable = (
    <div className="cardFlex">
      {result.map((card, idx) => (
        <ProgrammableContent key={idx} card={card}></ProgrammableContent>
      ))}
    </div>
  );

  const Transformable = (
    <div className="cardFlex">
      {result.map((card, idx) => (
        <TransformableContent key={idx} card={card}></TransformableContent>
      ))}
    </div>
  );

  const Educational = (
    <div className="cardFlex">
      {result.map((card, idx) => (
        <EducationalContent key={idx} card={card}></EducationalContent>
      ))}
    </div>
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <button
          style={{
            clipPath: "polygon(11% 0, 89% 0, 100% 100%, 0 100%",
            fontSize: "15px",
            padding: "10px 30px",
          }}
          onClick={() => handleTab("Programmable")}
          className={
            activeTab === "Programmable" ? "ActiveTabST" : "tab-button-one"
          }
        >
          Programmable
        </button>

        <button
          style={{
            clipPath: "polygon(11% 0, 89% 0, 100% 100%, 0 100%",
            fontSize: "15px",
            padding: "10px 30px",
          }}
          onClick={() => handleTab("Transformable")}
          className={activeTab === "Transformable" ? "ActiveTabST" : ""}
        >
          Transformable
        </button>

        <button
          style={{
            clipPath: "polygon(11% 0, 89% 0, 100% 100%, 0 100%",
            fontSize: "15px",
            padding: "10px 30px ",
          }}
          onClick={() => handleTab("Educational")}
          className={activeTab === "Educational" ? "ActiveTabST" : ""}
        >
          Robo Drones
        </button>
      </div>
      <div>
        {activeTab === "Programmable" && Programmable}
        {activeTab === "Transformable" && Transformable}
        {activeTab === "Educational" && Educational}
      </div>
    </div>
  );
};

export default Tabs;
