// Homepage.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Titlebox from "../components/Titlebox";
import Cardbar from "../components/Cardbar";
import Textbutton from "../components/Textbutton";
import "../src/style.css";

const Homepage = () => {
 const [movies, setMovies] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const api_key = process.env.VITE_YOUR_SECRET_KEY; 

 const fetchMovies = async (page) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=Marvel&apikey=${api_key}&page=${page}`);
    if (response.data.Search) {
      setMovies(response.data.Search);
    }
 };

 useEffect(() => {
    fetchMovies(currentPage);
 }, [currentPage]);

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
        <Titlebox />
        <Cardbar cards={movies.map(movie => ({ imageUrl: movie.Poster }))} />
        <Textbutton onClick={handlePrevious}>Previous</Textbutton>
        <Textbutton onClick={handleNext}>Next</Textbutton>
      </div>
    </div>
 );
};

export default Homepage;
