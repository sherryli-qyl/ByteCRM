import React, { Component } from "react";
import "./Private.scss";
import Profile from "../../../../img/Contact/profile.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarDropdown from "./components/NavbarDropdown";
import { withRouter } from "react-router";

class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      // showDropdown: false,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.onClickDropdown = this.onClickDropdown.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // handleToggler() {
  //   this.setState((prevState) => ({
  //     showDropdown: !prevState.showDropdown,
  //   }));
  // }
  // onClickDropdown() {
  //   this.handleToggler();
  // }
  // handleClickOutside(event) {
  //   if (this.state.showDropdown) {
  //     this.onClickDropdown();
  //   }
  // }
  // componentDidMount() {
  //   document.addEventListener("mousedown", this.handleClickOutside);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("mousedown", this.handleClickOutside);
  // }
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
              className={
                this.state.clicked ? "nav_dropdown active" : "nav_dropdown"
              }
            >
              <NavbarDropdown user={this.props.user} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Private);
