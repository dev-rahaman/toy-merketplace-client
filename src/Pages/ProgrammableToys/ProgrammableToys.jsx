/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useTitle from "../../Components/Title/Title";
import ProgrammableContent from "../../Components/ProgrammableContent/ProgrammableContent";

const ProgrammableToys = () => {
  useTitle("Programmable");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://alive-baby-server-rs-rahaman.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);

  const result = toys.filter((n) => n.subcategory == "Transformable");
  // console.log(result);
  return (
    <div>
      <h2 className="heading-blog">All Programmable Toys</h2>
      <div className="cardFlex">
        {result.map((card, idx) => (
          <ProgrammableContent key={idx} card={card}></ProgrammableContent>
        ))}
      </div>
    </div>
  );
};

export default ProgrammableToys;
