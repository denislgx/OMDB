import React from "react";

export default ({ handleEmailInput, handlePassInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      EMAIL: <input onChange={handleEmailInput} type="email" name="email" />
      PASSWORD:{" "}
      <input onChange={handlePassInput} type="password" name="password" />
      <button type="submit" className="btn btn-secondary btn-sm">
        Log-in
      </button>
    </form>
  );
};
