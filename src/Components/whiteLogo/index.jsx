import React, { Component } from "react";
import logo from "../../Assets/images/logo.png";

export default class WhiteLogo extends Component {
  render() {
    return (
      <div className="White-Logo">
        <img src={logo} alt="White-Logo" />
      </div>
    );
  }
}
