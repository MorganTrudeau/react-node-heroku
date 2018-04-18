import React, { Component } from "react";
import "../styles/component.css";
import retaining_wall_allen_block_landscape from "../images/Hardscape/allen_block_brick_retaining_wall_patio_hardscape_landscaping_12.JPG";
import lawn_maintenance_square from "../images/Lawn Maintenance/lawn_maintenance_square.jpg";
import softscape_square from "../images/Softscape/softscape_square.jpg";

const Carousel = require("react-bootstrap/lib/Carousel");
const Button = require("react-bootstrap/lib/Button");

class CarouselComp extends Component {
  render() {
    return (
      <div className="multiCarousel">
        <Carousel controls={false} pauseOnHover={false}>
          <Carousel.Item>
            <div className="gridRow setCol3">
              <img
                src={retaining_wall_allen_block_landscape}
                alt="retaining_wall_allen_block_landscape"
                className="coverWidth"
              />
              <img
                src={lawn_maintenance_square}
                alt="retaining_wall_allen_block_landscape"
                className="coverWidth"
              />
              <img
                src={softscape_square}
                alt="retaining_wall_allen_block_landscape"
                className="coverWidth"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComp;
