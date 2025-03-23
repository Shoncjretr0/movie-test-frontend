import React, { useEffect, useState } from 'react';
import { Input, Button, message, Spin } from 'antd'; // Import Spin
import axiosInstance from '../api/axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state

    const searchMovies = async () => {
        setLoading(true); // Set loading to true before fetching data
        try {
            const response = await axiosInstance.get(`/movies/search?title=${searchTerm}`);
            setMovies(response.data.movies); // assuming response.data is an array of movie objects
        } catch (error) {
            message.error('Failed to fetch movies');
        } finally {
            setLoading(false); // Set loading to false after fetching is done
        }
    };

    const addFavorite = async (movie) => {
        const payload = {
            title: movie.title,
            year: movie.year,
            imdb_id: movie.imdb_id,
            type: movie.type,
            poster: movie.poster,
        };
        console.log("movie",movie)
        console.log("payload",payload)
        try {
            await axiosInstance.post('/movies/add_favourites', payload);
            message.success('Added to favorites!');
        } catch (error) {
            message.error('Failed to add to favorites');
        }
    };


    useEffect(() => {
        searchMovies();
    }, []);

    return (
        <div>
            <div className='search-main-wrap'>
                <div className='search-wrap'>
                    <Input
                        placeholder="Search for a movie"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onPressEnter={searchMovies}
                    />
                    <Button onClick={searchMovies}>
                        Search
                    </Button>
                </div>
            </div>

            <div className="movie-cards-container">
                {/* Show loader while data is being fetched */}
                {loading ? (
                    <Spin size="large" />
                ) : (
                    movies?.map((movie) => (
                        <div className="movie-card" key={movie.imdbID}>
                            <div className="movie-card-body">
                                <img className="movie-poster" alt={movie.title} src={movie.poster} />
                                <div className="movie-details">
                                    <h3 className='movie-title'>{movie.title}</h3>
                                    <p>{movie.year}</p>
                                    <Button onClick={() => addFavorite(movie)}>Add to Favorites</Button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MovieList;
