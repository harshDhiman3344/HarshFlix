import React, { useState, useEffect } from 'react';
import MovieCard from '../MOVIECARD/MovieCard';

const Home = () => {
    const [movies, setMovies] = useState([]); // Ensure movies is initialized as an empty array
    const [loading, setLoading] = useState(true); // Track loading state
    const API_KEY = '392f867be145af0d87fe74fe4dd34f2d'; // Replace with your TMDB API key // Replace with your TMDB API key

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
                );
                const data = await response.json();
                setMovies(data.results || []); // Safely handle missing data
                setLoading(false); // Stop loading
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false); // Stop loading even if there's an error
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <p>Loading movies...</p>; // Render a loading state
    }

    if (movies.length === 0) {
        return <p>No movies available.</p>; // Handle empty movie list
    }

    return (
        <div className="movie-container bg-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={{
                        title: movie.title,
                        poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                        release_date: movie.release_date,
                        id: movie.id,
                    }}
                />
            ))}
        </div>
    );
};

export default Home;
