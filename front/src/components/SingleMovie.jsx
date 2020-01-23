import React from "react";

export default ({ singleMovie, isLogged, addFavCr, history }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => history.push("/")}
        className="btn btn-secondary btn-sm"
      >
        OMDB HOME
      </button>
      {isLogged ? (
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
      <h1>{singleMovie.Title}</h1>
      <img src={singleMovie.Poster} alt="" />
      <h6>Genre: {singleMovie.Genre}</h6>
      <h6>Year: {singleMovie.Year}</h6>
      <h6>Director: {singleMovie.Director}</h6>
      <h6>Actors: {singleMovie.Actors}</h6>
      <h6>Plot: {singleMovie.Plot}</h6>
      {isLogged ? (
        <button onClick={() => addFavCr(singleMovie)}>Add to Favorites</button>
      ) : null}
    </div>
  );
};
