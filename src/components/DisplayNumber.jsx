import { Component } from "react";

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>DisPlay Number</h1>
        <input type="text" value="0" readonly></input>
      </div>
    );
  }
}
