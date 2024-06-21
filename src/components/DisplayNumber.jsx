import React, { Component } from "react";
import store from "../store.js";

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>DisPlay Number</h1>
        <input type="text" value={this.props.number} readOnly></input>
      </div>
    );
  }
}
