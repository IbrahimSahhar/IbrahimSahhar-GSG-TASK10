import React, { Component } from "react";

export default class LastGame extends Component {
  render({ Src, Text } = this.props) {
    return (
      <div className="last-game">
        <div className="text-game">{Text}</div>
        <img src={Src} alt="text-game" />
      </div>
    );
  }
}
