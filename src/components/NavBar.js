import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/Users/jroques/Development/React/constellation-app/src/star-regular.svg"

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "20px",
  margin: "0 6px 6px",
  background: "grey",
  
  color: "white",
  
};

function NavBar() {
  return (
    <div className="nav">
      <img 
        src={logo}
        width="20px"
        height="20px"
      />
      <NavLink
        to="/about"
        exact
        
        
        activeStyle={{
          background: "turquoise",
        }}
      >

         About    
      </NavLink>
      <img 
        src={logo}
        width="20px"
        height="20px"
      />
      <NavLink
        to="/aboutVr"
        exact
        
        activeStyle={{
          background: "turquoise",
        }}
      >
         What is 'View Rating'? 
      </NavLink>
      <img 
        src={logo}
        width="20px"
        height="20px"
      />
      <NavLink
        to="/history"
        exact
        
        activeStyle={{
          background: "turquoise",
        }}
      >
         History 
      </NavLink>
      <img 
        src={logo}
        width="20px"
        height="20px"
        
      />
    </div>
  );
}

export default NavBar;

