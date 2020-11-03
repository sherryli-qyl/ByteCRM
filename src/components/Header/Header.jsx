import React from "react";
import Public from "./components/Public";
import Private from "./components/Private";
import "./Header.scss";

const Header = () => (
  <nav className="styled_header">
    <div className="styled_header__container">
      <div className="layout">
        <div className="left">
          <Public />
        </div>
        <div className="right">
          <Private />
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
