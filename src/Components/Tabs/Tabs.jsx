/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Programmable");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const Programmable = () => {};
  const Transformable = () => {};
  const Educational = () => {};

  return (
    <div>
      <button
        style={{ fontSize: "20px", padding: "10px" }}
        onClick={() => handleTab("Programmable")}
        className={activeTab === "Programmable" ? "ActiveTabST" : ""}
      >
        Programmable
      </button>

      <button
        style={{ fontSize: "20px", padding: "10px" }}
        onClick={() => handleTab("Transformable")}
        className={activeTab === "Transformable" ? "ActiveTabST" : ""}
      >
        Transformable
      </button>

      <button
        style={{ fontSize: "20px", padding: "10px" }}
        onClick={() => handleTab("Educational")}
        className={activeTab === "Educational" ? "ActiveTabST" : ""}
      >
        Educational
      </button>
    </div>
  );
};

export default Tabs;
