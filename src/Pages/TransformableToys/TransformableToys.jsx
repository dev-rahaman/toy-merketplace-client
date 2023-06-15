/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useTitle from "../../Components/Title/Title";
import TransformableContent from "../../Components/TransformableContent/TransformableContent";

const TransformableToys = () => {
  useTitle("Transformable");
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
  console.log(result);
  return (
    <div>
      <h2 className="heading-blog">All Transformable Toys</h2>
      <div className="cardFlex">
        {result.map((card, idx) => (
          <TransformableContent key={idx} card={card}></TransformableContent>
        ))}
      </div>
    </div>
  );
};

export default TransformableToys;
