import React, { Component } from "react";
import "../styles/component.css";

const Nav = require("react-bootstrap/lib/Nav");
const Navbar = require("react-bootstrap/lib/Navbar");
const NavItem = require("react-bootstrap/lib/NavItem");
const NavDropdown = require("react-bootstrap/lib/NavDropdown");
const MenuItem = require("react-bootstrap/lib/MenuItem");

class SideNav extends Component {
	render() {
		return (
			<div className="primaryBGColor whiteText wrap-collabsible">
				<input id="collapsible" class="toggle" type="checkbox" />
				<label for="collapsible" class="lbl-toggle">
					Services
				</label>
				<div className="collapsible-content">
					<div className="content-inner">
						<div className="sideNavItem">Hardscape</div>
						<div className="sideNavItem">Paving Stones</div>
						<div className="sideNavItem">Lawn Installation</div>
						<div className="sideNavItem">
							Irrigation & Lightings
						</div>
						<div className="sideNavItem">Drainage Systems</div>
						<div className="sideNavItem">Lawn Maintenance</div>
						<div className="sideNavItem">Excavation Services</div>
						<div className="noBorder sideNavItem">Softscape</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SideNav;
