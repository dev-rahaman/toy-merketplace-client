/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProgrammableContent from "../../Components/ProgrammableContent/ProgrammableContent";

const ProgrammableToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://alive-baby-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);

  const result = toys.filter((n) => n.subcategory == "Programmable");
  console.log(result);
  return (
    <div>
      <h2>Programmable</h2>
      <div className="cardFlex">
        {result.map((card, idx) => (
          <ProgrammableContent key={idx} card={card}></ProgrammableContent>
        ))}
      </div>
    </div>
  );
};

export default ProgrammableToys;
