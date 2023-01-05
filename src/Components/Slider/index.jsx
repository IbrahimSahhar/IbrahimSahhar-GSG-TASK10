import React, { Component } from "react";
import "./style.css";

export default class Slider extends Component {
  render({ Src, Alt, Description, Style } = this.props) {
    return (
      <div className="slider">
        <img src={Src} alt={Alt} />
        <p className="description" style={Style}>
          {Description}
        </p>
      </div>
    );
  }
}
