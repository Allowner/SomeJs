import React, { Component } from "react";
import "./films.css";
import { Link } from "react-router-dom";
import actions from "../../redux/actions";
import { connect } from "react-redux";

class Films extends Component {
  renderImage(imageUrl, i) {
    return (
      <div className="filmImageStyle" key={i}>
        <Link to={`/film/${imageUrl.id}`}>
          <img
            src={imageUrl.img}
            height="420"
            width="280"
            alt="description of"
            onClick={() => this.onClick(imageUrl.genre)}
          />
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="filmGallery">
        <div className="films">
          {this.props.imageUrls.map((imageUrl, i) =>
            this.renderImage(imageUrl, i)
          )}
        </div>
      </div>
    );
  }

  async onClick(genre) {
    this.props.fetchFilms({ data: [] });
    let similarUrl = `https://reactjs-cdp.herokuapp.com/movies?searchBy=genres&genre=${genre}`;
    let similarResults = await fetch(similarUrl);
    let films = await similarResults.json();
    console.log(films);
    this.props.fetchFilms(films);
  }
}

function mapStateToProps(state) {
  return {
    films: state
  };
}

export default connect(mapStateToProps, actions)(Films);
