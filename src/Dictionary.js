import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
