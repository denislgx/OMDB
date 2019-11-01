import React from "react";

export default ({ singleMovie, isLogged, addFavCr }) => {
  console.log("SINGLEMOVIE", isLogged);
  return (
    <div>
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
