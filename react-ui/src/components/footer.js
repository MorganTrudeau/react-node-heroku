import React, { Component } from 'react';
import '../App.css';
import scLogo from '../images/scLogo.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footImg">
          <p>Website Design by</p>
          <img src={ scLogo } height="25px" alt="salamnder commander website design" />
        </div>
        <p>778-808-9036</p>
        <p>salcomdesigns@gmail.com</p>
      </div>

    );
  }
}

export default Footer;