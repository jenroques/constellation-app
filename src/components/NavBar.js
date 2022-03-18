import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/header"
        exact
        style={linkStyles}
        activeStyle={{
          background: "grey",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/newconstellationform"
        exact
        style={linkStyles}
        activeStyle={{
          background: "grey",
        }}
      >
        New Log
      </NavLink>
      <NavLink
        to="/search"
        exact
        style={linkStyles}
        activeStyle={{
          background: "grey",
        }}
      >
        Search
      </NavLink>
    </div>
  );
}

export default NavBar;

