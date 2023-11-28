import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Rating: {movie.vote_average}</p>
        <button onClick={openModal}>Watch Trailer</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <br />
            <br />
            <h2>Un site Web Pour Afficher Des Titres De Films</h2>
            {/*  */}
            <iframe
              title="Trailer"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${movie.trailer_key}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={closeModal}>Close Trailer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
