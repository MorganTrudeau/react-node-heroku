import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../styles/component.css";

const Carousel = require("react-bootstrap/lib/Carousel");
const Button = require("react-bootstrap/lib/Button");

class CarouselComp extends Component {
  render() {
    return (
      <div className="bannerCarousel relative">
        <div className="hovering smoke cover whiteText centerText">
          <h1>Lynx Landscape Contracting</h1>
          <h3>Making Your Ideas a Reality</h3>
          <Link to="/contact">
            <Button bsSize="large" className="whiteButton">
              <b>GET A QUOTE</b>
            </Button>
          </Link>
        </div>
        <Carousel controls={false} pauseOnHover={false}>
          {this.props.pictures.map((pic,index) => (
            <Carousel.Item key={index} className="relative">
                  <img src={pic.pic} alt={pic.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CarouselComp;
