import React, { Component } from 'react';
import scLogo from '../images/scLogoWhite.png'
import '../App.css';

class Header extends Component {
  render() {
    return (
		<div className="header">
			<div className="headerLogo">
				<img src={ scLogo } height="35px" alt="salamnder commander website design" />
			</div>
		</div>
    );
  }
}

export default Header;