import React, { Component } from "react";
import "../App.css";
class Search extends Component {
  render() {
    return (
      <div>
        <span className="logoMargin">
          <b>netflix</b>roulet
        </span>
        <div className="searchDiv">
          <h2>FIND YOUR MOVIE</h2>
          <input className="searchInput" type="text" />
          <button className="searchButton">SEARCH</button>
          <br />
          <span className="spanPadding">SEARCH BY</span>
          <button className="buttonSelected">TITLE</button>
          <button className="simpleButton">GENRE</button>
        </div>
      </div>
    );
  }
}

export default Search;
