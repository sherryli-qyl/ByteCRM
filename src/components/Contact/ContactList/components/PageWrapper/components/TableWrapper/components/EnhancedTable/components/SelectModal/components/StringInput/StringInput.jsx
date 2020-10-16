import React, { Component } from "react";
import "./StringInput.scss";

const ERROR_MSG = {
  "Email": "Invalid email address format",
  "Phone number": "Invalid phone number format",
  "Last activity date": "Invalid date format",
};

const EMPTY_MSG = {
  "Name": "Name cannot be empty",
  "Email": "Email address cannot be empty",
  "Last activity date": "Date cannot be empty",
  "Phone number": "Phone number cannot be empty"
};

class StringInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.props.getInputData(this.state.value);
        res();
      }, 500);
    });
  };

  render() {
    return (
      <>
        <div className="hint">Please type in the new value</div>
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="errorMsg">
          {this.props.isEmpty
            ? EMPTY_MSG[this.props.selectedField]
            : !this.props.isValid
            ? ERROR_MSG[this.props.selectedField]
            : undefined}
        </div>
      </>
    );
  }
}

export default StringInput;
