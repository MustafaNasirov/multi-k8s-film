// MovieComponent.js

import React, { useState, useEffect } from 'react';

const MovieComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch movie data from the API
    const fetchMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWFmOGM3MzhiYzFlNDhjZjZiMDZiNmYxZWY0ZjAyOCIsInN1YiI6IjY0Y2FlNGQ0NGZkMTQxMDBiMGYyYTgyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QACsgE90H0Q7HBxy4WJj3vJhowlW7p8RoMiWZz1jEt4'
          }
        };

        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular',
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieComponent;
