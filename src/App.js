import react, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot.jsx";
import DisplayNumberRoot from "./components/DisplayNumberRoot.jsx";

class App extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot />
        <DisplayNumberRoot />
      </div>
    );
  }
}

export default App;
