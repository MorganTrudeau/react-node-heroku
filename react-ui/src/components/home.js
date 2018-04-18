import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import platforms from "../images/platforms.png";
import stars from "../images/background.jpg";

var Button = require("react-bootstrap/lib/Button");

class Home extends Component {
	render() {
		return (
			<div>
				<div className="home">
					<div
						className="homeCell0 parallax"
						style={{ backgroundImage: `url(${stars})` }}
					>
						<p>Developing beautiful, responsive websites</p>
						<p>with the power of React.</p>
						<Link to="/contact">
							<Button className="button">
								START YOUR WEBSITE
							</Button>
						</Link>
					</div>
				</div>
				<div className="homeHeader">
					<div className="headerCell0">
						<p>WEBSITES THAT WORK FOR YOU</p>
					</div>

					<div className="headerCell1">
						<div className="title">
							<h3>Appealing</h3>
						</div>
						<div className="textBlock">
							<p>
								We choose designs that target your audience to
								maximize user experience and portray the face of
								your business as it should be.
							</p>
						</div>
					</div>

					<div className="headerCell2">
						<div className="title">
							<h3>Responsive</h3>
						</div>
						<div className="textBlock">
							<p>
								Responsive web design is critical with the
								number of different devices on the market. We
								build websites that look great on any device.
							</p>
						</div>
					</div>

					<div className="headerCell3">
						<div className="title">
							<h3>Effective</h3>
						</div>
						<div className="textBlock">
							<p>
								Every website has a purpose and should be
								designed to deliver results. Regardless of the
								goal of your website we will make sure it gets
								the job done.
							</p>
						</div>
					</div>

					<div className="headerCell4">
						<Link to="/about">
							<Button className="button1">WHO WE ARE</Button>
						</Link>

						<Link to="/projects">
							<Button className="button2">VIEW PORTFOLIO</Button>
						</Link>

						<Link to="/contact">
							<Button className="button3">GET A QUOTE</Button>
						</Link>
					</div>
				</div>

				<div className="homeCell2">
					<p className="p1">OWN A WEBSITE THAT</p>
					<p className="p2">COMMANDS ATTENTION</p>
				</div>

				<div className="homeCell2-1">
					<img
						src={platforms}
						width="100%"
						alt="iphone mac tablet computer platforms website design"
					/>
				</div>

				<div className="homeCell3">
					<p>CUSTOMIZED SERVICES AND SOLUTIONS</p>
				</div>

				<div className="homeCell4">
					<div className="homeCell4-1 gridCol">
						<div className="header4">
							<h3>SINGLE PAGE APPLICATIONS</h3>
						</div>
						<div className="textBlock">
							<p>
								We use the lastest technology in web development
								to build the fastest websites on the internet
							</p>
						</div>
						<div className="buttonDiv">
							<Link to="/services">
								<Button className="button">LEARN MORE</Button>
							</Link>
						</div>
					</div>

					<div className="homeCell4-2 gridCol">
						<div className="header4">
							<h3>ECOMMERCE STORES</h3>
						</div>
						<div className="textBlock">
							<p>
								We can build an effective and secure platform to
								sell your products
							</p>
						</div>
						<div className="buttonDiv">
							<Link to="/services">
								<Button className="button">LEARN MORE</Button>
							</Link>
						</div>
					</div>

					<div className="homeCell4-3 gridCol">
						<div className="header4">
							<h3>LOGO DESIGN</h3>
						</div>
						<div className="textBlock">
							<p>
								Complete your brand with a graphically designed
								logo.
							</p>
						</div>
						<div className="buttonDiv">
							<Link to="/services">
								<Button className="button">LEARN MORE</Button>
							</Link>
						</div>
					</div>

					<div className="homeCell4-4 gridCol">
						<div className="header4">
							<h3>SEARCH ENGINE OPTIMIZATION</h3>
						</div>
						<div className="textBlock">
							<p>
								Get your website seen on google with cutting
								edge SEO.
							</p>
						</div>
						<div className="buttonDiv">
							<Link to="/services">
								<Button className="button">LEARN MORE</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
