import React from "react";
import "./style.css";

function Header() {
    return (
      <div>
        <div className="header">
        <img alt="logo" src="/assets/images/nick_logo.jpg" />
        </div>
        <div>
        <h1 className="headerTitle">Click each image once to win!</h1>
        </div>
        </div>
        );
  }


export default Header;