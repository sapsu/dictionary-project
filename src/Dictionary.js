import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center mb-4">Dictionary</h1>
      <form className="row mb-4" onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          className="col form-control"
          onChange={handleKeywordChange}
        />
        <input
          type="submit"
          value="Search"
          className="col-md-2 btn btn-sm btn-secondary ms-2"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
