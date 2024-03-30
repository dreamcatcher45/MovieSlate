import React, { useState, useEffect } from "react";
import axios from 'axios';
import Titlebox from "../components/Titlebox";
import Cardbar from "../components/Cardbar";
import Textbutton from "../components/Textbutton";
import "../src/style.css";

const Homepage = () => {
 const [movies, setMovies] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [category, setCategory] = useState("Marvel");
 const api_key = import.meta.env.VITE_YOUR_SECRET_KEY; 

 const categories = ["Marvel", "Sony", "Latest", "Popular", "Action", "Adventure", "Animation", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller"];
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

 return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="titlebox-container">
        <Titlebox onExploreClick={nextCategory} />
        <h2 className="category-name">{category} Movies</h2>
        <Cardbar cards={movies.map(movie => ({ imageUrl: movie.Poster }))} />
        <Textbutton onClick={handlePrevious}>Previous</Textbutton>
        <Textbutton onClick={handleNext}>Next</Textbutton>
      </div>
    </div>
 );
};

export default Homepage;