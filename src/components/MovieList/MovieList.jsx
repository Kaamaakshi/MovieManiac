import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "../FilterGroup";

const MovieList = ({ type, Title, emoji }) => {
  const [movies, setMovies] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${type}&apikey=db15c82c`
      );
      const data = await response.json();

      if (data.Response === "True") {
        // Fetch detailed data for each movie to include rating and votes
        const movieDetails = await Promise.all(
          data.Search.map(async (movie) => {
            const detailResponse = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=db15c82c`
            );
            const detailData = await detailResponse.json();
            return {
              ...movie,
              imdbRating: detailData.imdbRating, // Add imdbRating
              imdbVotes: detailData.imdbVotes, // Add imdbVotes
            };
          })
        );
        setMovies(movieDetails);
        setFilterMovies(movieDetails); // Set the movies with the detailed information
      } else {
        setError(data.Error); // Set error if no movies found
      }
    } catch (err) {
      setError("An error occurred while fetching the data."); // Set error on fetch failure
    } finally {
      setLoading(false); // Stop loading when done
    }
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.imdbRating >= rate);
      setFilterMovies(filtered);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {Title}{" "}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="Year">Year</option>
            <option value="imdbRating">Rating</option>
          </select>

          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {/* Only call map if movies is an array */}
        {Array.isArray(movies) && movies.length > 0 ? (
          filterMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <div>No movies found</div> // Display a message if no movies are available
        )}
      </div>
    </section>
  );
};

export default MovieList;
