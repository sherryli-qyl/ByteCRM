import React from "react";
import { NavLink } from "react-router-dom";
import "./JumpButton.scss";

const DEST = {
  contact: "/contacts/main",
  CONTACT: "/contacts/main",
  company: "/companies/main",
  COMPANY: "/companies/main",
};

class JumpButton extends React.Component {
  render() {
    return (
      <button
        className={'naked__button_' + this.props.type}
        onClick={(event) => {
          event.preventDefault();
          sessionStorage.setItem("id", this.props.id);
        }}
      >
        <NavLink
          className="inactive"
          activeClassName="active"
          to={{
            pathname: DEST[this.props.type],
          }}
        >
          {this.props.name}
        </NavLink>
        &ensp;
      </button>
    );
  }
}

export default JumpButton;
