import React, { Component } from "react";
import "./middleLine.css";

const SearchMiddleLine = ({ amount }) => {
  return (
    <div className="middleLine">
      <div className="countResult">{amount} movies found</div>
      <div className="sortings">
        <span className="sortString">SORT BY</span>
        <div className="btn-group" role="group" aria-label="bGroup">
          <button
            className="marginDate btn btn-secondary"
            id="releaseButton"
            onClick={() => onElemClick(true)}
          >
            RELEASE DATE
          </button>
          <button
            className="simpleButton btn btn-danger"
            id="ratingButton"
            onClick={() => onElemClick(false)}
          >
            RATING
          </button>
        </div>
      </div>
    </div>
  );
};

function onElemClick(value) {
  var releaseClasses = document.getElementById("releaseButton").classList;
  var ratingClasses = document.getElementById("ratingButton").classList;
  if (value === true) {
    releaseClasses.remove("btn-secondary");
    releaseClasses.add("btn-danger");
    ratingClasses.remove("btn-danger");
    ratingClasses.add("btn-secondary");
    this.props.sortFilms(this.props.films.data, "release_date");
  } else {
    ratingClasses.remove("btn-secondary");
    ratingClasses.add("btn-danger");
    releaseClasses.remove("btn-danger");
    releaseClasses.add("btn-secondary");
    this.props.sortFilms(this.props.films.data, "vote_average");
  }
}

const FilmMiddleLine = ({ category }) => (
  <div className="middleLine">
    <div className="countResult">Film by {category} genre</div>
  </div>
);

export default class MiddleLine extends Component {
  render() {
    var result;
    if (this.props.category !== undefined) {
      result = <FilmMiddleLine category={this.props.category} />;
    } else {
      result = <SearchMiddleLine amount={this.props.amount} />;
    }
    return result;
  }
}
