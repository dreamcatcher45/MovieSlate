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
      <button className="back-text-button" onClick={() => goBack()}>
        <span className="back-arrow">&larr;</span>
        Back to main Dashboard
      </button>
      <div class="movie-details">
        <div>
          <img  class="poster" src={movieDetails.Poster} alt="Movie Poster" />
        </div>
        <div class="details">
          <div>
            <p className="Movie-title">{movieDetails.Title}</p>
            <p className="Movie-subtitle">
              {movieDetails.Year}&nbsp;{" •  "}&nbsp;
              {movieDetails.Genre}
            </p>
            <p className="Movie-plot">{movieDetails.Plot}</p>
          </div>
          <p className="Movie-subtitle">Cast</p>
          <p className="Movie-plot">{movieDetails.Actors}</p>
          <p className="Movie-subtitle">Rating</p>
          <p>{movieDetails.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
