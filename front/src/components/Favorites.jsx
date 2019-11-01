import React from "react";
// import { Link } from "react-router-dom";

export default ({ favorites, removeFavCr }) => {
  return (
    <div>
      {favorites.map(movie => (
        <div key={movie.film.imdbID}>
          <h1>Title: {movie.film.Title}</h1>
          <img src={movie.film.Poster} alt="" />
          <h6>Actors: {movie.Actors}</h6>
          <h6>Awards: {movie.film.Awards}</h6>
          <h6>Country: {movie.film.Country}</h6>
          <h6>Director: {movie.film.Director}</h6>
          <h6>Genre: {movie.film.Genre}</h6>
          <h6>Plot: {movie.film.Plot}</h6>
          <h6>Ratings: {movie.film.Rated}</h6>
          <h6>
            {movie.film.Ratings.map(rating => (
              <div key={movie.film.Ratings.indexOf(rating)}>
                <h6>{rating.Source}</h6>
                <h6>{rating.Value}</h6>
              </div>
            ))}
          </h6>
          <h6>Released: {movie.film.Released}</h6>
          <h6>Writer: {movie.film.Writer}</h6>
          <h6>Runtime: {movie.film.Runtime}</h6>
          <button onClick={() => removeFavCr(movie.film)}>
            Borrar Favorito
          </button>
        </div>
      ))}
    </div>
  );
};
