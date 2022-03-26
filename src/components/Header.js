import React from 'react';
import NavBar from './NavBar';
import About from './About';
import AboutVr from './AboutVr'
import History from './History';
import { Route, Switch } from "react-router-dom";

function Header({  }) {
    return(
        <header>
            <h1>
                Constellation Log
            </h1>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/about">
              <About />
              </Route>
            <Route exact path="/aboutvr">
              <AboutVr />
              </Route>
            <Route exact path="/history">
              <History />
            </Route>
          </Switch>
        </div>
        </header>
    );
}





export default Header;