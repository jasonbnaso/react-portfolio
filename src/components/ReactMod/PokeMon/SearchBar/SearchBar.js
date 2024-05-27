import React, { useState } from "react";
import "./SearchBar.scss";

export const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
    // onSubmit(data);
  };

  return (
    <div className="py-3 search-field">
      <form
        className="form-inline justify-content-center"
        onSubmit={onFormSubmit}
      >
        <div className="form-group mb-2">
          <input
            className="form-control"
            value={term}
            type="text"
            onChange={(e) => setTerm(e.target.value.toLowerCase())}
            placeholder="Pokemon name"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-2 ml-1"
          disabled={!term}
          value="Submit"
        >
          Find Poke
        </button>
      </form>
    </div>
  );
};
