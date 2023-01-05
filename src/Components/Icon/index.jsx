import React, { Component } from "react";

export default class Icon extends Component {
  render({ Src, Alt, Class } = this.props) {
    return <img className={Class} src={Src} alt={Alt}></img>;
  }
}
