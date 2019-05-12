import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
