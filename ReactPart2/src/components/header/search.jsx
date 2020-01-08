import React, { Component } from "react";
import { Link } from "react-router-dom";
import actions from "../../redux/actions";
import { connect } from "react-redux";
import "./search.css";
//import queryString from "query-string";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: "title",
      searchString: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <span className="logoMargin">
          <b>netflix</b>roulette
        </span>
        <div className="searchDiv">
          <p className="searchHeader">FIND YOUR MOVIE</p>
          <div>
            <input
              className="searchInput"
              type="text"
              onChange={this.handleChange}
            />
            <Link to={this.getCurrentSearchString()}>
              <button
                className="searchButton btn btn-danger"
                onClick={() => this.onClick()}
              >
                SEARCH
              </button>
            </Link>
          </div>
          <br />
          <span className="spanPadding">SEARCH BY</span>
          <div className="btn-group" role="group" aria-label="bGroup">
            <button
              className="buttonSelected btn btn-danger"
              id="titleButton"
              onClick={() => this.onElementClick("title")}
            >
              TITLE
            </button>
            <button
              className="simpleButton btn btn-secondary"
              id="genreButton"
              onClick={() => this.onElementClick("genres")}
            >
              GENRE
            </button>
          </div>
        </div>
      </div>
    );
  }

  getCurrentSearchString() {
    if (this.state.searchString !== "") {
      let query = `searchBy=${this.state.filterBy}&search=${this.state.searchString}`;
      return `/search/Search?${query}`;
    } else return "/";
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value });
  }

  async onClick() {
    let url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=rating&sortOrder=desc`;
    let query = `searchBy=${this.state.filterBy}&search=${this.state.searchString}`;
    try {
      let result = await fetch(`${url}&${query}`);
      let films = await result.json();
      this.props.fetchFilms(films);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  onElementClick = value => {
    var titleClasses = document.getElementById("titleButton").classList;
    var genreClasses = document.getElementById("genreButton").classList;
    if (value === "genres") {
      genreClasses.remove("btn-secondary");
      genreClasses.add("btn-danger");
      titleClasses.remove("btn-danger");
      titleClasses.add("btn-secondary");
    } else {
      titleClasses.remove("btn-secondary");
      titleClasses.add("btn-danger");
      genreClasses.remove("btn-danger");
      genreClasses.add("btn-secondary");
    }

    this.setState({ filterBy: value });
  };
}

function mapStateToProps(state) {
  return {
    films: state
  };
}

export default connect(mapStateToProps, actions)(Search);
