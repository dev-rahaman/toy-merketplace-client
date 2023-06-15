/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProgrammableContent from "../ProgrammableContent/ProgrammableContent";
import TransformableContent from "../TransformableContent/TransformableContent";
import EducationalContent from "../EducationalContent/EducationalContent";

const Tabs = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Transformable");

  useEffect(() => {
    fetch("https://alive-baby-server-rs-rahaman.vercel.app/alltoys")
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
      {result.slice(0, 8).map((card, idx) => (
        <ProgrammableContent key={idx} card={card}></ProgrammableContent>
      ))}
    </div>
  );

  const Transformable = (
    <div className="cardFlex">
      {result.slice(0, 8).map((card, idx) => (
        <TransformableContent key={idx} card={card}></TransformableContent>
      ))}
    </div>
  );

  const Educational = (
    <div className="cardFlex">
      {result.slice(0, 8).map((card, idx) => (
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
          className={activeTab === "Programmable" ? "ActiveTabST" : ""}
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
          Educational
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
