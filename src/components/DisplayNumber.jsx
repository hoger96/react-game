import react, { Component } from "react";

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>DisPlay Number</h1>
        <input type="text" value={this.props.number} readonly></input>
      </div>
    );
  }
}
