import React, { Component } from "react";
import "./style.css";

export default class Card extends Component {
  render(
    { Type = "no type", ErrorMassage = "no message", Style } = this.props
  ) {
    return (
      <div className="card" style={Style}>
        <h4>{Type ? "Error!!" : "registered successfully!"}</h4>
        <div className="alert_text">{ErrorMassage}</div>
      </div>
    );
  }
}
