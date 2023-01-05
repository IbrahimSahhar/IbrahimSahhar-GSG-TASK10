import React, { Component } from "react";
import "./style.css";

export default class IconButton extends Component {
  render() {
    return (
      <a href="#" className="icon_btn shadow">
        <img src={this.props.icon} alt="icon" />
      </a>
    );
  }
}
