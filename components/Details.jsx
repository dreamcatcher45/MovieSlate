import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = ({ movieId, goBack }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const api_key = import.meta.env.VITE_YOUR_SECRET_KEY;
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${movieId}&apikey=${api_key}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="details">
      <h2>Movie Details</h2>
      <button className="back-text-button" onClick={() => goBack()}>
 <span className="back-arrow">&larr;</span>
 Back to main Dashboard
</button>

      <p>Title: {movieDetails.Title}</p>
      <p>Year: {movieDetails.Year}</p>
      <p>Rated: {movieDetails.Rated}</p>
      <p>Released: {movieDetails.Released}</p>
      <p>Runtime: {movieDetails.Runtime}</p>
      <p>Genre: {movieDetails.Genre}</p>
      <p>Plot: {movieDetails.Plot}</p>
      <p>
        Poster: <img src={movieDetails.Poster} alt="Movie Poster" />
      </p>
    </div>
  );
};

export default Details;
