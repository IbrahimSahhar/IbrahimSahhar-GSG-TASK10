import React, { Component } from "react";
import "./style.css";

export default class Button extends Component {
  render({ textButton, Icon, Style, Type, Method } = this.props) {
    if (Icon) {
      return (
        <div className="button">
          <button type={Type} style={Style} onClick={Method}>
            {textButton}
          </button>
          <img className="icon" src={Icon} alt={Icon} />
        </div>
      );
    }
    return (
      <div className="button">
        <button type={Type} style={Style} onClick={Method}>
          {textButton}
        </button>
      </div>
    );
  }
}
