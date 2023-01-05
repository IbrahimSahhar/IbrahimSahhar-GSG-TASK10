import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../Components/ScrollToTop";

import "./style.css";

export default class Card extends Component {
  state = {
    classnames: "",
  };

  render(
    {
      Clasess,
      Method,
      Type = "no type",
      ErrorMassage = "no message",
      Style,
      Href,
    } = this.props
  ) {
    return (
      <div className={`frame ${Clasess}`} style={Style}>
        <div className={`center card`}>
          <span className="icon">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
          <h3 className="title">Oh snap!</h3>
          <p className="body">{Type ? ErrorMassage : "successfully!!"}</p>
          <ScrollToTop>
            <NavLink
              to={`${Type ? "" : { Href }.Href}`}
              className={`btn ${Type ? "error" : "success"}`}
              onClick={Method}
            >
              {Type ? "Revision" : "Ok"}
            </NavLink>
          </ScrollToTop>
        </div>
      </div>
    );
  }
}
