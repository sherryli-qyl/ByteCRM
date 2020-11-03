import React, { Component } from "react";
import "./Public.scss";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmallLogo from "../../../../img/Logo/smalllogo.png";
import {
  CONTACT_BASE_URL,
  COMPANY_BASE_URL,
  ABOUTUS_BASE_URL,
  CONTACTUS_BASE_URL,
} from "../../../Routes/URLMap";
import HeaderNavLink from "../HeaderNavLink";

class Public extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="left_wrapper">
        <div className="navbar_logo">
          <HeaderNavLink path={CONTACT_BASE_URL}>
            <img src={SmallLogo} alt="small logo" />
          </HeaderNavLink>
        </div>
        <div className="menu_icon" onClick={this.handleClick}>
          <i>
            {this.state.clicked ? (
              <FontAwesomeIcon icon={faTimes} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </i>
        </div>
        <div
          className={
            this.state.clicked ? "left_nav_menu active" : "left_nav_menu"
          }
        >
          <HeaderNavLink path={CONTACT_BASE_URL}>Contacts</HeaderNavLink>
          <HeaderNavLink path={COMPANY_BASE_URL}>Companies</HeaderNavLink>
          <HeaderNavLink path={ABOUTUS_BASE_URL}>About</HeaderNavLink>
          <HeaderNavLink path={CONTACTUS_BASE_URL}>Contact Us</HeaderNavLink>
        </div>
      </div>
    );
  }
}

export default Public;
