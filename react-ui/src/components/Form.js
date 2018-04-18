import React, { Component } from "react";
import "../styles/custom.css";

const Button = require("react-bootstrap/lib/Button");
const FormControl = require("react-bootstrap/lib/FormControl");
const Checkbox = require("react-bootstrap/lib/Checkbox");
const FormGroup = require("react-bootstrap/lib/FormGroup");
const ControlLabel = require("react-bootstrap/lib/ControlLabel");

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

function sendEmail(name, phone, email, address, message) {
  try {
    fetch("email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        address: address,
        message: message
      })
    });
  } catch (err) {
    console.log(err);
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone: "", email: "", address: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const phone = this.state.phone;
    const email = this.state.email;
    const address = this.state.address;
    const message = this.state.message;

    alert("Thank you. We will respond as soon as possible");

    sendEmail(name, phone, email, address, message);
  }

  render() {
    return (
      <div className="formComp centerText">
        <p>Get your FREE CONSULTATION Lynx Landscaping & Design by filling in as much information as possible below.</p>
        <p>NOTE: for a Project Quote, fill in the info below, and email us any documents you have, such as sketches or links to examples online.</p>
        <form onSubmit={ this.handleSubmit }>
          <div className="formWrapper">
            <div className="form">
              <FormControl type="text" placeholder="Name*" value={this.state.name} name="name" onChange={ this.handleChange } />
              <FormControl type="text" placeholder="Telephone" value={this.state.phone} name="phone" onChange={ this.handleChange } />
              <FormControl type="text" placeholder="Email*" value={this.state.email} name="email" onChange={ this.handleChange } />
              <FormControl type="text" placeholder="Address" value={this.state.address} name="address" onChange={ this.handleChange } />
            </div>
          </div>
          <div className="form textArea">
            <FormControl
              componentClass="textarea"
              placeholder="Job Description"
              rows={6}
              value={this.state.message}
              name="message"
              onChange={ this.handleChange }
            />
          </div>
          <div className="centerText">
            <Button type="submit" className="formButton whiteButton">Get Free Quote</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
