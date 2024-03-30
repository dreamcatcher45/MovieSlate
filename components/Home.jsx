import React, { useState } from 'react';
import Homepage from './Homepage';
import Details from './Details';

const Home = () => {
 const [showDetails, setShowDetails] = useState(false);
 const [selectedMovieId, setSelectedMovieId] = useState(null);

 const handleCardClick = (movieId) => {
  console.log("handled");
    setSelectedMovieId(movieId);
    setShowDetails(true);
 };

 const goBack = () => {
    setShowDetails(false);
 };

 return (
    <div>
      {showDetails ? (
        <Details movieId={selectedMovieId} goBack={goBack} />
      ) : (
        <Homepage onCardClick={handleCardClick} />
      )}
    </div>
 );
};

export default Home;
