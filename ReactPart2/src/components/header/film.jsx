import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./film.css";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      loading: true
    };
  }

  render() {
    if (
      Number.parseInt(this.props.match.params.id) !==
      Number.parseInt(this.state.film.id)
    ) {
      this.onStart();
    }

    if (this.state.film.poster_path === undefined && !this.state.loading)
      throw new Error("There is no film with such id");
    else
      return (
        <div>
          <div>
            <span className="logoMargin">
              <b>netflix</b>roulette
            </span>
            <Link to="/">
              <button className="buttonImage" />
            </Link>
          </div>
          <div className="mainMargin">
            <div className="imgDiv">
              <img
                src={this.state.film.poster_path}
                alt="description of"
                width="280"
                height="370"
              />
            </div>
            <div className="textDiv">
              <div>
                <span className="filmTitle">{this.state.film.title}</span>
                <span className="filmVote">{this.state.film.vote_average}</span>
              </div>
              <p style={{ marginTop: "5%" }}>
                <span className="yearAndRuntime">
                  {new Date(this.state.film.release_date)
                    .getFullYear()
                    .toString()}
                </span>
                <span>year</span>
                <span className="yearAndRuntime runtimePad">
                  {this.state.film.runtime}
                </span>
                <span>min</span>
              </p>
              <p>{this.state.film.overview}</p>
            </div>
          </div>
        </div>
      );
  }

  async onStart() {
    let url = `https://reactjs-cdp.herokuapp.com/movies/${this.props.match.params.id}`;
    try {
      let result = await fetch(url);
      let jsonResult = await result.json();
      this.setState({ film: jsonResult, loading: false });
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default Film;
