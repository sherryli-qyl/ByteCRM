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
      showDropdown: false,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.onClickDropdown = this.onClickDropdown.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown
    }));
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
    const { showDropdown } = this.state;
    let className = "private__wrapper__navBarDropdown ";
    if (showDropdown){
      className += "private__wrapper__navBarDropdown--active";
    }

    return (
      <div className="private">
        <div className="private__wrapper">
          <div className="private__wrapper__user" onClick={this.handleClick}>
            <img className = "private__wrapper__user__userIcon" src={Profile} alt="profile" />
            <div className="private__wrapper__user__arrowIcon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className = {className}>
            <NavbarDropdown user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Private);
