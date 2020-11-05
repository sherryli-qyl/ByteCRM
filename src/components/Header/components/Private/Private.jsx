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
    this.wrapperRef = React.createRef();
    this.btnRef = React.createRef();
    this.handleToggler = this.handleToggler.bind(this);
    this.onClickDropdown = this.onClickDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleToggler() {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  }

  onClickDropdown() {
    this.handleToggler();
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && !this.btnRef.current.contains(event.target) && this.state.showDropdown) {
      this.onClickDropdown();
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { showDropdown } = this.state;
    let className = "private__wrapper__navBarDropdown ";
    if (showDropdown) {
      className += "private__wrapper__navBarDropdown--active";
    }

    return (
      <div className="private">
        <div className="private__wrapper">
          <div className="private__wrapper__user" ref={this.btnRef} onClick={this.onClickDropdown}>
            <img className="private__wrapper__user__userIcon" src={Profile} alt="profile" />
            <div className="private__wrapper__user__arrowIcon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          {showDropdown ?
            <div className="navBarDropdownCorner" />
            :
            ""
          }
          <div className={className} ref={this.wrapperRef}>
            <NavbarDropdown user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Private);
