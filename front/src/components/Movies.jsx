import React from "react";
import { Link } from "react-router-dom";

export default ({ moviesFound }) => {
  return (
    <div>
      {moviesFound ? (
        moviesFound.map(movie => (
          <div key={movie.imdbID}>
            <Link to={`/singlemovie/${movie.imdbID}`}>
              <h1>{movie.Title}</h1>
            </Link>
            <h1>{movie.Year}</h1>
            <img src={movie.Poster} />
          </div>
        ))
      ) : (
        <h1>No se encontró nada..</h1>
      )}
    </div>
  );
};
