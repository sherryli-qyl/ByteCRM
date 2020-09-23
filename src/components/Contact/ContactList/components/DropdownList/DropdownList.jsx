import React from "react";
import "./DropdownList.scss";
import DropdownItem from "./components/DropdownItem";

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      elements: this.props.elements,
      selected: "",
    };
  }

  changeSelected = (item) => {
    this.setState({ selected: item });
  };

  changeVisible = (s) => {
    this.setState({ visible: s });
  };

  render() {
    return (
      <div className="dropdown-root">
        <div className="hint">Please select a field</div>

        <div
          className="text-box"
          onClick={this.changeVisible(!this.state.visible)}
        >
          <div className="display">{this.state.selected}</div>
        </div>
        <span
          className="select-icon"
          onClick={this.changeVisible(!this.state.visible)}
        >
          ▼
        </span>
        {this.state.visible && (
          <DropdownItem
            items={this.state.elements}
            changeSelected={this.changeSelected}
            changeVisible={this.changeVisible}
          />
        )}
      </div>
    );
  }
}

export default DropdownList;
