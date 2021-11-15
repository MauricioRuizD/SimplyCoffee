import React from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

export default function Logo() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-logo"> Simply Coffee</h2>
      </header>
    </div>
  );
}
