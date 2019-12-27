import React, { Component } from "react";
import Films from "./films";
import Empty from "./empty";
import MiddleLine from "../middle/middleLine";
import "./result.css";
import actions from "../../redux/actions";
import { connect } from "react-redux";
class Result extends Component {
  render() {
    let result;
    var data = this.props.films.data;
    console.log("w", data);
    if (data !== undefined && data.length > 0) {
      result = (
        <Films
          imageUrls={data.map(function(item) {
            return {
              id: item.id,
              img: item.poster_path,
              genre: item.genres[0]
            };
          })}
        />
      );
    } else {
      result = <Empty />;
    }

    return (
      <div>
        <MiddleLine amount={data !== undefined ? data.length : 0} />
        {result}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state
  };
}

export default connect(mapStateToProps, actions)(Result);
