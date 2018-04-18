import React, { Component } from 'react';
import ReactDOM from 'react-dom'

var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');

class NavbarInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoStyle: {
        visibility: 'hidden',
        opacity: 0
      }
    };
    this.handleScroll = this.handleScroll.bind(this);

  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

      let nav = ReactDOM.findDOMNode(this.refs.nav);

      if(nav.offsetTop > 80) {
        this.setState({
          logoStyle: {
            visibility: 'visible',
            opacity: 1
          }
        });
      }
      else{
        this.setState({
          logoStyle: {
            visibility: 'hidden',
            opacity: 0
          }
        });
      }
    console.log(nav.offsetTop);
  }

  render() {
    return (
      <div className="nav" ref="nav">
        <Navbar collapse inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <div className="navItems">
              <Nav>
                <li role="presentation"><a href='/'>Home</a></li>
                <li role="presentation"><a href='/about'>About</a></li>
                <li role="presentation"><a href='/services'>Services</a></li>
                <li role="presentation"><a href='/projects'>Projects</a></li>
                <li role="presentation"><a href='/contact'>Contact</a></li>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarInstance;

//<img className="navLogo" src={ scLogoWhite } alt="logo" style={this.state.logoStyle} />