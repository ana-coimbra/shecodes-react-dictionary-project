import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // Documentation Dictionary: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    // Documentation Pexel: https://www.pexels.com/api/documentation/
    const pexelsApiKey = "***************************";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Header">
          <a
            href="https://shecodes-react-dictionary-project.netlify.app/"
            className="Logo"
          >
            <i className="fas fa-book-reader"></i> dictionary
          </a>
          <form onSubmit={handleSubmit}>
            <button>
              <i className="fas fa-search"></i>
            </button>
            <input
              type="search"
              placeholder={keyword}
              onChange={handleKeywordChange}
            />{" "}
          </form>
        </div>{" "}
        <div className="row">
          <div className="col-lg-6">
            <Results results={results} />
          </div>
          <div className="col-lg-6">
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
