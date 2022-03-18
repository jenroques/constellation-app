import logo from '../logo.svg';
import '../App.css';
import React, { } from "react";
import Header from "./Header";
import ConstellationPage from "./ConstellationPage";
import NewConstellationForm from './NewConstellationForm';
import Search from './Search';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <ConstellationPage />
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/search">
              <Search />
              </Route>
            <Route exact path="/newconstellationform">
              <NewConstellationForm />
            </Route>
            <Route exact path="/header">
              <Header />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
