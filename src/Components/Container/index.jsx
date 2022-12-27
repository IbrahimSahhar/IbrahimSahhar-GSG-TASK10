import React, { Component } from "react";
import "./style.css";

export default class Container extends Component {
  render(style) {
    return (
      <div style={this.props.style} className="container">
        {this.props.children}
      </div>
    );
  }
}
