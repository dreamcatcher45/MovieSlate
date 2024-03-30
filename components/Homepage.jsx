import React, { useState, useEffect } from "react";
import axios from 'axios';
import Titlebox from "../components/Titlebox";
import Cardbar from "../components/Cardbar";
import Textbutton from "../components/Textbutton";
import Details from "../components/Details"; // Import the Details component
import "../src/style.css";

const Homepage = () => {
 const [movies, setMovies] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [category, setCategory] = useState("Marvel");
 const [selectedMovieId, setSelectedMovieId] = useState(null); // State for selected movie ID
 const api_key = import.meta.env.VITE_YOUR_SECRET_KEY; 

 const categories = ["Marvel", "Popular", "Action", "Adventure", "Animation", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller","Sony", "Latest"];

 const nextCategory = () => {
   const currentIndex = categories.indexOf(category);
   const nextIndex = (currentIndex + 1) % categories.length;
   setCategory(categories[nextIndex]);
 };

 const fetchMovies = async (page) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${category}&apikey=${api_key}&page=${page}`);
    if (response.data.Search) {
      setMovies(response.data.Search);
    }
 };

 useEffect(() => {
    fetchMovies(currentPage);
 }, [currentPage, category]);

 const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
 };

 const handleNext = () => {
    setCurrentPage(currentPage + 1);
 };

 const handleCardClick = (movieId) => {
    setSelectedMovieId(movieId); // Set the selected movie ID
 };

 const goBack = () => {
    setSelectedMovieId(null); // Reset the selected movie ID to null to go back to the original screen
 };

 return (
   <div className="homepage">
     {selectedMovieId ? (
      <>
        <div className="background-dash"></div>
        <div className="d-overlay"></div>
        <div className="details-container">
       <Details movieId={selectedMovieId} goBack={goBack} />
        </div>
      </>
     ) : (
       <>
         <div className="background-image"></div>
         <div className="overlay"></div>
         <div className="titlebox-container">
           <Titlebox onExploreClick={nextCategory} />
           <h2 className="category-name">{category} Movies</h2>
           <Cardbar cards={movies.map(movie => ({ imageUrl: movie.Poster, id: movie.imdbID }))} onCardClick={handleCardClick} />
           <Textbutton onClick={handlePrevious}>Previous</Textbutton>
           <Textbutton onClick={handleNext}>Next</Textbutton>
         </div>
       </>
     )}
   </div>
);

};

export default Homepage;
