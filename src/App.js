import { Component } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot.jsx";
import DisplayNumberRoot from "./components/DisplayNumberRoot.jsx";

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </div>
  );
}

export default App;
