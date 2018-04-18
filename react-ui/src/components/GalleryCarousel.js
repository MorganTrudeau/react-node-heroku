import React, { Component } from "react";
import "../styles/custom.css";

const Carousel = require('react-bootstrap/lib/Carousel');

class GalleryCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  componentWillMount() {
    this.setState({ index: this.props.index })
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <div className="galleryCarousel">
        <Carousel
          activeIndex={this.state.index}
          direction={this.state.direction}
          onSelect={this.handleSelect}
          indicators={false}
          interval={null}
          slide={false}
        >
        {this.props.imgs.map((img, index) =>
          <Carousel.Item key={index}>
              <img alt={ img.alt } src={ img.src } />
          </Carousel.Item>
        )}
        </Carousel>
      </div>
    );
  }
}

export default GalleryCarousel;