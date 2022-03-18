import logo from '../logo.svg';
import '../App.css';
import React, { } from "react";
import Header from "./Header";
import ConstellationPage from "./ConstellationPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
        <ConstellationPage />
    </div>
  );
}

export default App;
