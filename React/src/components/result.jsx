import React, { Component } from "react";
import Films from "./films";
import Empty from "./empty";
import "../App.css";
class Result extends Component {
  render() {
    return (
      <div>
        <div className="middleLine">
          <b>{this.props.count} movies found</b>
          <div className="sortings">
            <span>SORT BY</span>
            <button>RELEASE DATE</button>
            <button>RATING</button>
          </div>
        </div>
        {this.props.count > 0} ? <Films imageUrls={this.props.imageUrls} /> :{" "}
        <Empty />
      </div>
    );
  }
}

export default Result;
