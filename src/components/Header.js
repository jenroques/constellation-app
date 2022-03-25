import React from "react";
import NavBar from "./NavBar";
import History from './History';
import About from './About';
import NewConstellationForm from './NewConstellationForm';
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
                    <Route exact path="/history">
                        <History />
                    </Route>
                    <Route exact path="/newconstellationform">
                        <NewConstellationForm />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
             </div>
        </header>
    );
}





export default Header;