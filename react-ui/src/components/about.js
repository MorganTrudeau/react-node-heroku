import React, { Component } from "react";
import "../App.css";
import reactLogo from "../images/react.png";

var Button = require("react-bootstrap/lib/Button");

class About extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<div className="about">
					<div className="pageHeader">
						<p className="p1">
							We share your passion for building businesses.
						</p>
						<Button className="button">GET A QUOTE</Button>
					</div>

					<div className="aboutCell0">
						<img
							src={reactLogo}
							height="80px"
							alt="react javascript website"
						/>
						<p>Powered by React</p>
					</div>
					<div className="aboutCell1" />
					<div className="aboutCell2" />
				</div>
			</div>
		);
	}
}

export default About;
