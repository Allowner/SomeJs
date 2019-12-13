import React, { Component } from "react";
import "../App.css";

class Films extends Component {
  renderImage(imageUrl, i) {
    return (
      <div className="filmImageStyle" key={i}>
        <img src={imageUrl} alt="description of" />
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
}

export default Films;
