/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TransformableContent from "../../Components/TransformableContent/TransformableContent";

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

  const result = toys.filter((n) => n.subcategory == "Transformable");
  console.log(result);
  return (
    <div>
      <h2>Transformable</h2>
      <div className="cardFlex">
        {result.map((card, idx) => (
          <TransformableContent key={idx} card={card}></TransformableContent>
        ))}
      </div>
    </div>
  );
};

export default ProgrammableToys;
