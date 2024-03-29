import React from 'react';

const Textbutton = ({ onClick, children }) => {
 return (
    <button className="text-button" onClick={onClick}>
      {children}
    </button>
 );
};

export default Textbutton;
