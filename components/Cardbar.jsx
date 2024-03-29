import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cardbar = ({ cards }) => {
 const [scrollPosition, setScrollPosition] = useState(0);
 const cardWidth = 150;
 const visibleCards = 9;
 const totalCards = cards.length;
 const maxScroll = totalCards - visibleCards;

 const autoSlide = () => {
    setScrollPosition((prevPosition) => {
      if (prevPosition < maxScroll) {
        return prevPosition + 0.5;
      } else {
        return 0;
      }
    });
 };

 useEffect(() => {
  autoSlide(); 
  const interval = setInterval(autoSlide, 2000); // Start the loop
  return () => clearInterval(interval); // Clean up on component unmount
}, []);

 return (
    <div className="cardbar">
      <div
        style={{
          display: "flex",
          transform: `translateX(-${scrollPosition * cardWidth}px)`,
          transition: "transform 3s ease-in-out",
        }}
      >
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
 );
};

export default Cardbar;
