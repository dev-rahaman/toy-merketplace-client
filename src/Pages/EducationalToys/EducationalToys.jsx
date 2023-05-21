/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import EducationalContent from "../../Components/EducationalContent/EducationalContent";
import useTitle from "../../Components/Title/Title";

const ProgrammableToys = () => {
  useTitle("Educational");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://alive-baby-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);

  const result = toys.filter((n) => n.subcategory == "Educational");
  console.log(result);
  return (
    <div>
      <h2 className="heading-blog">Educational</h2>
      <div className="cardFlex">
        {result.map((card, idx) => (
          <EducationalContent key={idx} card={card}></EducationalContent>
        ))}
      </div>
    </div>
  );
};

export default ProgrammableToys;
