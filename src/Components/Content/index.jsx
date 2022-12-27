import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render({ quotation, text, anchor, Vector, Style } = this.props) {
    return (
      <div className="content" style={Style}>
        <div className="text">
          <img src={quotation} alt="quotation" />
          {text}
        </div>
        <span className="anchor">{anchor}</span>
        <img className="vector" src={Vector} alt="Vector" />
      </div>
    );
  }
}
