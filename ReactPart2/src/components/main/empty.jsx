import React, { Component } from "react";
import "./empty.css";

class Empty extends Component {
  render() {
    return (
      <div className="backEmpty">
        <b className="textStyle">No films found</b>
      </div>
    );
  }
}

export default Empty;
