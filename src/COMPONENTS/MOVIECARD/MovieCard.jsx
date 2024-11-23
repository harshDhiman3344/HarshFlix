// import React from 'react';
// import { Link } from 'react-router-dom';

// const MovieCard = ({ movie }) => {
//     return (
//         <div className="movie-card">
//             <img src={movie.poster} alt={movie.title} />
//             <h3>{movie.title}</h3>
//             <p>{movie.release_date}</p>
//             <Link to={`/movies/${movie.id}`} className="select-button">View Details</Link>
//         </div>
//     );
// };

// export default MovieCard;

import "moviecard.css"
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card bg-white p-4 shadow-md rounded-md m-2">
            <img 
                src={movie.poster} 
                alt={movie.title} 
                className="movie-poster w-full h-auto rounded-md" 
            />
            <h3 className="movie-title font-bold mt-2">{movie.title}</h3>
            <p className="movie-release-date text-gray-600">{movie.release_date}</p>
            <Link 
                to={`/movies/${movie.id}`} 
                className="select-button text-blue-500 hover:underline"
            >
                View Details
            </Link>
        </div>
    );
};

export default MovieCard;
