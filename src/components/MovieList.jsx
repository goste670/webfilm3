import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: 'f7d22120d190311f2a36d44357d2b13b',
            page: currentPage, 
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des films', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]); 

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <button onClick={handleNextPage}>Page suivante</button>
    </div>
  );
};

export default MovieList;
