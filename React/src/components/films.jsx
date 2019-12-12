import React, { Component } from "react";

class Films extends Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} alt="description of" />
      </div>
    );
  }

  render() {
    return (
      <div className="filmGallery">
        <div className="films">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}

export default Films;
