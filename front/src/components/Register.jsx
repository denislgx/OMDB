import React from "react";

export default ({ handleInputEmail, handleInputPass, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      EMAIL: <input onChange={handleInputEmail} type="email" />
      PASSWORD: <input onChange={handleInputPass} type="password" />
      <button type="submit" className="btn btn-secondary btn-sm">
        Register
      </button>
    </form>
  );
};
