import React from "react";
import { Link } from "react-router-dom";

export default ({ moviesFound, history, user }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => history.push("/")}
        className="btn btn-secondary btn-sm"
      >
        OMDB HOME
      </button>

      {user ? (
        <button
          type="button"
          onClick={() => history.push("/favorites")}
          className="btn btn-secondary btn-sm"
        >
          VER FAVORITOS
        </button>
      ) : null}
      <button
        type="button"
        onClick={() => history.goBack()}
        className="btn btn-secondary btn-sm"
      >
        VOLVER
      </button>

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
