import React from "react";
import {
  Navbar,
  NavbarBrand,

  NavItem,
} from 'reactstrap';
import "./style.css";


function NavBar(props) {
  return (
    <div>
      <Navbar className="navbar">
        <NavbarBrand className="brand" href="/">Nicktoons Memory Game</NavbarBrand>
        <NavItem className="status">
          <p>{props.status}</p>
        </NavItem>
        <NavItem className="currentScore">
          <p>Current Score: {props.score}</p>
        </NavItem>
        <NavItem className="highScore">
          <p>High Score: {props.high}</p>
        </NavItem>
      </Navbar>
    </div>
  );
}



export default NavBar;
