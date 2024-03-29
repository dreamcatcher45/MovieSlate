import React from 'react';

const Card = ({ imageUrl }) => {
 return (
    <div className="card">
      <img src={imageUrl} alt="Card" />
    </div>
 );
};

export default Card;
