import React from "react";

const Search = () => {
  return (
    <div className="md:w-2/5">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered md:w-auto"
        />
      </div>
    </div>
  );
}

export default Search;
