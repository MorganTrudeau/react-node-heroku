import React, { Component } from "react";
import "../App.css";
import phoneIconGrey from "../images/phoneIconGrey.png";
import googleIcon from "../images/googleIcon.png";
import artIcon from "../images/artIcon.png";
import cameraIcon from "../images/cameraIcon.png";
import storeIcon from "../images/storeIcon.png";

class Services extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<div className="services">
					<div className="pageHeader">
						<p className="p1">Don't settle for just a website.</p>
						<p className="p2">We offer the whole package.</p>
					</div>
					<div className="servicesCells">
						<div className="servicesCell">
							<div className="icon">
								<img
									src={phoneIconGrey}
									height="60px"
									alt="phone mobile"
								/>
							</div>
							<div className="title">
								<p>RESPONSIVE WEB DESIGN</p>
							</div>
							<div className="textBlock">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Integerodio. Praesent
									libero.
								</p>
							</div>
						</div>

						<div className="servicesCell">
							<div className="icon">
								<img
									src={storeIcon}
									height="60px"
									alt="ecommerce store"
								/>
							</div>
							<div className="title">
								<p>ECOMMERCE STORES</p>
							</div>
							<div className="textBlock">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Integer nec odio. Praesent
									libero.
								</p>
							</div>
						</div>

						<div className="servicesCell">
							<div className="icon">
								<img
									src={googleIcon}
									height="60px"
									alt="google search engine optimization"
								/>
							</div>
							<div className="title">
								<p>SEACRH ENGINE OPTIMIZATION</p>
							</div>
							<div className="textBlock">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Integer nec odio. Praesent
									libero.
								</p>
							</div>
						</div>

						<div className="servicesCell">
							<div className="icon">
								<img
									src={artIcon}
									height="60px"
									alt="art logo design"
								/>
							</div>
							<div className="title">
								<p>LOGO DESIGN</p>
							</div>
							<div className="textBlock">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Integer nec odio. Praesent
									libero.
								</p>
							</div>
						</div>

						<div className="servicesCell1">
							<div className="icon">
								<img
									src={cameraIcon}
									height="60px"
									alt="photography"
								/>
							</div>
							<div className="title">
								<p>PHOTOGRAPHY</p>
							</div>
							<div className="textBlock">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Integer nec odio. Praesent
									libero.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
