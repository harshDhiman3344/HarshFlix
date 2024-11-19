import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <Link to={`/movies/${movie.id}`} className="select-button">View Details</Link>
        </div>
    );
};

export default MovieCard;