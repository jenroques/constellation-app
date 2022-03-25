import logo from '../logo.svg';
import '../App.css';
import React, { useState } from "react";
import Header from "./Header";
import ConstellationPage from "./ConstellationPage";





function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <Header />
      <ConstellationPage />
    </div>
  );
}

export default App;
