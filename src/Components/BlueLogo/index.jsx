import React, { Component } from "react";
import logo from "../../Assets/images/blue-logo.png";

export default class BlueLogo extends Component {
  render() {
    return (
      <div className="blue-Logo">
        <img src={logo} alt="blue-Logo" />
      </div>
    );
  }
}
