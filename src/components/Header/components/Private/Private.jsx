import React, { Component } from "react";
import "./Private.scss";
import Profile from "../../../../img/Contact/profile.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarDropdown from "../NavbarDropdown";
import { withRouter } from "react-router";

class Private extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="right_wrapper">
        <div className="profile_wrapper" onClick={this.handleClick}>
          <div className="profile_container">
            <div className="profile_nav">
              <img src={Profile} alt="profile" />
            </div>
            <div className="down_icon_wrapper">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div
              className={this.state.clicked ? "nav_dropdown active" : "nav_dropdown"}
            >
              <NavbarDropdown />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Private);
