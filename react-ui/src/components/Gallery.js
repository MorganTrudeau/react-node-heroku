import React, { Component } from "react";
import "../styles/custom.css";
import Fade from "react-reveal/Fade";
import GalleryCarousel from "./GalleryCarousel";

const Button = require('react-bootstrap/lib/Button');
const Modal = require('react-bootstrap/lib/Modal'); 

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { imgs: this.props.imgs, modal: true, show: false, index: 0 };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.modal !== undefined ? this.setState({ modal: this.props.modal }) : null;
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(index) {
    if(this.state.modal) {
      this.setState({ show: true, index: index });
    }
  }

  render() {
    return (
      <div className="gallery">
        {this.props.imgs
          ? this.props.imgs.map((img, index) => (
              <a href={img.href} key={index} onClick={() => this.handleShow(index) }>
                <div className="imgDiv">
                  <Fade>
                    <div className="cover tint lightTint" id={ img.index }>
                      <img
                        src={img.src}
                        alt={img.alt}
                        className={ img.ratio === "width" ? "imgWidth" : "imgHeight" }
                        style={img.style}
                      />
                    </div>
                    <div className={ img.title ? "hovering smoke centerText whiteText" : "" }>
                      <h6>{img.title}</h6>
                    </div>
                  </Fade>
                </div>
              </a>
            ))
          : null}
        <Modal show={this.state.show} onHide={this.handleClose} className="galleryModal">
          <Modal.Body>
            <GalleryCarousel imgs={ this.props.imgs } index={ this.state.index } />
          </Modal.Body>
          <Modal.Footer className="centerText">
            <Button className="button" onClick={this.handleClose}>Exit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Gallery;
