import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center mb-4">Dictionary</h1>
      <form className="text-center" onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input
          type="submit"
          value="Search"
          className="btn btn-sm btn-success ms-2"
        />
      </form>
    </div>
  );
}
