import React, { Component } from "react";
import "./middleLine.css";
import actions from "../../redux/actions";
import { connect } from "react-redux";

class SearchMiddleLine extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="middleLine">
        <div className="countResult">{this.props.amount} movies found</div>
        <div className="sortings">
          <span className="sortString">SORT BY</span>
          <div className="btn-group" role="group" aria-label="bGroup">
            <button
              className="marginDate btn btn-secondary"
              id="releaseButton"
              onClick={() => this.onElementClick(true)}
            >
              RELEASE DATE
            </button>
            <button
              className="simpleButton btn btn-danger"
              id="ratingButton"
              onClick={() => this.onElementClick(false)}
            >
              RATING
            </button>
          </div>
        </div>
      </div>
    );
  }

  onElementClick = value => {
    var releaseClasses = document.getElementById("releaseButton").classList;
    var ratingClasses = document.getElementById("ratingButton").classList;
    var str;
    if (value === true) {
      releaseClasses.remove("btn-secondary");
      releaseClasses.add("btn-danger");
      ratingClasses.remove("btn-danger");
      ratingClasses.add("btn-secondary");
      str = "release_date";
    } else {
      ratingClasses.remove("btn-secondary");
      ratingClasses.add("btn-danger");
      releaseClasses.remove("btn-danger");
      releaseClasses.add("btn-secondary");
      str = "vote_average";
    }

    if (this.props.films.data !== undefined) {
      this.props.sortFilms([...this.props.films.data], str);
    }
  };
}

const FilmMiddleLine = ({ category }) => (
  <div className="middleLine">
    <div className="countResult">Film by {category} genre</div>
  </div>
);

class MiddleLine extends Component {
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

function mapStateToProps(state) {
  return {
    films: state
  };
}

export default connect(mapStateToProps, actions)(SearchMiddleLine, MiddleLine);
