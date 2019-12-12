import React, { Component } from "react";
import "../App.css";
class Search extends Component {
  render() {
    return (
      <div>
        <p class="logoMargin">
          <b>netflix</b>roulet
        </p>
        <div class="searchDiv">
          <h2>FIND YOUR MOVIE</h2>
          <input class="searchInput" type="text" />
          <button class="searchButton">SEARCH</button>
          <br />
          <span class="spanPadding">SEARCH BY</span>
          <button class="buttonSelected">TITLE</button>
          <button class="simpleButton">GENRE</button>
        </div>
      </div>
    );
  }
}

export default Search;
