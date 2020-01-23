import React from "react";
// import { Link } from "react-router-dom";

export default ({ favorites, removeFavCr, history }) => {
  console.log("BORRAME ESTAAAAAAAAA: ", favorites);
  return (
    <div>
      <button
        type="button"
        onClick={() => history.push("/")}
        className="btn btn-secondary btn-sm"
      >
        OMDB HOME
      </button>
      <button
        type="button"
        onClick={() => history.goBack()}
        className="btn btn-secondary btn-sm"
      >
        VOLVER
      </button>
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
          {/* {console.log("EL IDDDD: ", movie.film.imdbID)} */}
          <button onClick={() => removeFavCr(movie.film.imdbID)}>
            Borrar Favorito
          </button>
        </div>
      ))}
    </div>
  );
};
