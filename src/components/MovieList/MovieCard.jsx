import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

// const MovieCard = ({ movie }) => {
//   // Destructure movie data including imdbRating and imdbVotes
//   const { Title, Year, Plot, Poster, imdbRating } = movie;
//   // console.log(movie);

//   return (
//     <a
//       href={`https://www.imdb.com/title/${movie.imdbID}`}
//       className="movie_card"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <img
//         src={
//           Poster !== "N/A"
//             ? movie.Poster
//             : "https://via.placeholder.com/400x600?text=No+Image"
//         } // Fallback image if no poster
//         alt={Title}
//         className="movie_poster"
//       />
//       <div className="movie_details">
//         <h3 className="movie_details_heading">{Title}</h3>
//         <div className="align_center movie_date_rate">
//           <p>{Year}</p>
//           <p className="align_center">
//             {imdbRating}
//             <img src={Star} alt="rating icon" className="card_emoji" />
//           </p>
//         </div>
//         <p className="movie_description">{Plot}</p>
//       </div>
//     </a>
//   );
// };

// const MovieCard = ({ movie }) => {
//   const { Title, Year, Plot, Poster, imdbRating } = movie;

//   return (
//     <a
//       href={`https://www.imdb.com/title/${movie.imdbID}`}
//       className="movie_card"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <img
//         src={
//           Poster !== "N/A"
//             ? Poster
//             : "https://via.placeholder.com/400x600?text=No+Image"
//         }
//         alt={Title}
//         className="movie_poster"
//       />
//       <div className="movie_details">
//         <h3 className="movie_details_heading">{Title}</h3>
//         <div className="align_center movie_date_rate">
//           <p>{Year}</p>
//           <p className="align_center">
//             {imdbRating ? imdbRating : "N/A"}
//             <img src={Star} alt="rating icon" className="card_emoji" />
//           </p>
//         </div>
//         <p className="movie_description">{Plot}</p>
//       </div>
//     </a>
//   );
// };

const MovieCard = ({ movie }) => {
  const { Title, Year, Plot, Poster, imdbRating } = movie;

  return (
    <a
      href={`https://www.imdb.com/title/${movie.imdbID}`}
      className="movie_card"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Only render the image if a valid poster URL exists */}
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
