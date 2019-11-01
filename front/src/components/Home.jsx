import React from "react";
import { Link } from "react-router-dom";

const formClass = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)"
};

const inputClass = {
  borderRadius: "25px"
};

export default ({
  handleInput,
  handleSubmit,
  isLogged,
  doLogOut,
  fetchFavCr
}) => {
  return (
    <div>
      {!isLogged ? (
        <div>
          {/* <img src="" class="mr-3" alt="..." />{" "} */}
          <Link to="/register">
            <button type="button" className="btn btn-secondary btn-sm">
              REGISTER
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className="btn btn-secondary btn-sm">
              LOG-IN
            </button>
          </Link>
        </div>
      ) : (
        <div>
          {" "}
          <Link to="/favorites">
            <button
              onClick={fetchFavCr}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              VER FAVORITOS
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={doLogOut}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              LOG-OUT
            </button>
          </Link>
        </div>
      )}

      <form onSubmit={handleSubmit} style={formClass}>
        <h1>CUL OMDB</h1> <br />
        <input
          onChange={handleInput}
          type="text"
          style={inputClass}
          placeholder="Búsqueda de películas..."
        />
      </form>
    </div>
  );
};
