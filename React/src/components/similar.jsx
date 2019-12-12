import React, { Component } from "react";
import Films from "./films";
import Empty from "./empty";
class Result extends Component {
  render() {
    return (
      <div>
        <b>{this.props.film.categry} movies found</b>
        <span>SORT BY</span>
        <button>RELEASE DATE</button>
        <button>RATING</button>
        {this.props.count > 0} ? <Films /> : <Empty />
      </div>
    );
  }
}

export default Result;
