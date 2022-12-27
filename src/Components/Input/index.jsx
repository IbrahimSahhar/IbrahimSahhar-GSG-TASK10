import React, { Component } from "react";
import "./style.css";

export default class Input extends Component {
  render({ label, placeholder, type, Name, Method, value } = this.props) {
    return (
      <div className="input">
        <label>{`${label}*`}</label>
        <input
          type={type}
          name={Name}
          placeholder={placeholder}
          required
          onChange={Method}
          value={value}
        />
      </div>
    );
  }
}
