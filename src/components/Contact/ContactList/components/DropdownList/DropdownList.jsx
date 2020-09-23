import React from "react";
import "./DropdownList.scss";
import DropdownItem from "./components/DropdownItem";

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hint: this.props.hint,
      items: this.props.items,
      visible: false,
      selected: "",
    };
  }

  getSelectedItem = (item) => {
    this.setState({ selected: item });
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.props.getSelectedField(this.state.selected);
        res();
      }, 500);
    });
  };

  changeVisible = (s) => {
    this.setState({ visible: s });
  };
  render() {
    return (
      <div className="dropdown-root">
        <div className="hint">{this.state.hint}</div>
        <div
          className="text-box"
          onClick={() => this.changeVisible(!this.state.visible)}
        >
          <div className="display">{this.state.selected}</div>
        </div>
        <span
          className="select-icon"
          onClick={() => this.changeVisible(!this.state.visible)}
        >
          ▼
        </span>
        {this.state.visible && (
          <DropdownItem
            items={this.props.items}
            getSelected={this.getSelectedItem}
            changeVisible={this.changeVisible}
          />
        )}
      </div>
    );
  }
}

export default DropdownList;
