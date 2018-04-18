import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Services from "./services";
import Contact from "./contact";
import About from "./about";
import Projects from "./projects";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default Main;
