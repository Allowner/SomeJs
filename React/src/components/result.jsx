import React, { Component } from "react";
import Films from "./films";
import Empty from "./empty";
class Result extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <b>{this.props.count} movies found</b>
        <span>SORT BY</span>
        <button>RELEASE DATE</button>
        <button>RATING</button>
        {this.props.count > 0} ? <Films imageUrls={this.props.imageUrls} /> :{" "}
        <Empty />
      </div>
    );
  }
}

export default Result;
