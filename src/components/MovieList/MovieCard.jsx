import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({ movie }) => {
  const { Title, Year, Plot, Poster, imdbRating } = movie;

  return (
    <a
      href={`https://www.imdb.com/title/${movie.imdbID}`}
      className="movie_card"
      target="_blank"
      rel="noopener noreferrer"
    >
   
      {Poster && Poster !== "N/A" ? (
        <img src={Poster} alt={Title} className="movie_poster" />
      ) : null}

      <div className="movie_details">
        <h3 className="movie_details_heading">{Title}</h3>
        <div className="align_center movie_date_rate">
          <p>{Year}</p>
          <p className="align_center">
            {imdbRating ? imdbRating : "N/A"}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{Plot}</p>
      </div>
    </a>
  );
};

export default MovieCard;
