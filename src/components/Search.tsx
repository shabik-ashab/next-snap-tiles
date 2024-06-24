import React from "react";

export default function Search() {
  return (
    <div className="md:w-2/5">
      {" "}
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
