import React, { useEffect, useState } from "react";
import { List, Card, message, Spin } from "antd";
import axiosInstance from "../api/axios";

const FavoriteMovies = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false); // Added loading state

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/movies/list_favourites");
      console.log(response);
      setFavorites(response.data.data);
    } catch (error) {
      message.error("Failed to fetch favorites");
    } finally {
      setLoading(false); // Set loading to false after fetching is done
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="movie-cards-container">
      {loading ? (
        <Spin size="large" />
      ) : (
        favorites?.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <div className="movie-card-body">
              <img
                className="movie-poster"
                alt={movie.Title}
                src={movie.poster}
              />
              <div className="movie-details">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoriteMovies;
