import React from 'react';

const Card = ({ imageUrl, id, onCardClick }) => {
 return (
    <div className="card" onClick={() => onCardClick(id)}>
      <img src={imageUrl} alt="Card" />
    </div>
 );
};

export default Card;
