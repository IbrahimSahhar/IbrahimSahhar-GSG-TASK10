import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../Components/ScrollToTop";

import "./style.css";

export default class Button extends Component {
  render({ textButton, Icon, Style, Type, Method, Href = "" } = this.props) {
    if (Icon) {
      return (
        <div className="button">
          <button type={Type} style={Style} onClick={Method}>
            <ScrollToTop>
              <NavLink style={{ color: "black" }} to={`/${Href}`}>
                {textButton}
              </NavLink>
            </ScrollToTop>
          </button>
          <img className="icon" src={Icon} alt={Icon} />
        </div>
      );
    }
    return (
      <div className="button">
        <button type={Type} style={Style} onClick={Method}>
          <a href="" style={{ color: "white" }}>
            {textButton}
          </a>
        </button>
      </div>
    );
  }
}
