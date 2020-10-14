import React, { Component } from "react";
import "./StringInput.scss";


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
      </>
    );
  }
}

export default StringInput;
