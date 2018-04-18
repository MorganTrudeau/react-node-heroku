import React, { Component } from "react";
import "../styles/component.css";

const Nav = require("react-bootstrap/lib/Nav");
const Navbar = require("react-bootstrap/lib/Navbar");
const NavItem = require("react-bootstrap/lib/NavItem");
const NavDropdown = require("react-bootstrap/lib/NavDropdown");
const MenuItem = require("react-bootstrap/lib/MenuItem");

class Navigation extends Component {
	render() {
		return (
			<div>
				<Navbar inverse collapseOnSelect fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/" />
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem eventKey={1} href="/">
								Home
							</NavItem>
							<NavItem eventKey={2} href="/about">
								About Us
							</NavItem>
							<NavDropdown
								eventKey={3}
								title="Services"
								id="basic-nav-dropdown"
							>
								<MenuItem
									eventKey={3.1}
									href="/services/hardscape"
								>
									Hardscape
								</MenuItem>
								<MenuItem
									eventKey={3.2}
									href="/services/paving-stones"
								>
									Paving Stones
								</MenuItem>
								<MenuItem
									eventKey={3.3}
									href="/services/lawn-installation"
								>
									Lawn Installation
								</MenuItem>
								<MenuItem
									eventKey={3.3}
									href="/services/irrigation-lighting"
								>
									Irrigation & Lighting
								</MenuItem>
								<MenuItem
									eventKey={3.3}
									href="/services/drainage-systems"
								>
									Drainage Systems
								</MenuItem>
								<MenuItem
									eventKey={3.3}
									href="/services/lawn-maintenance"
								>
									Lawn Maintenance
								</MenuItem>
								<MenuItem
									eventKey={3.3}
									href="/services/excavation-services"
								>
									Excavation Services
								</MenuItem>
								<MenuItem
									eventKey={3.3}
									href="/services/softscape"
								>
									Softscape
								</MenuItem>
							</NavDropdown>
							<NavItem eventKey={2} href="/gallery">
								Gallery
							</NavItem>
							<NavItem eventKey={2} href="/contact">
								Contact
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
