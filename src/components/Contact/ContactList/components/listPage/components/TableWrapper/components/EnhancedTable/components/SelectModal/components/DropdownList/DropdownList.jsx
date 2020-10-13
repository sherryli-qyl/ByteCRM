import React from "react";
import "./DropdownList.scss";
import OutsideClickHandler from "react-outside-click-handler";
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
        if (this.props.getSelectedField) {
          this.props.getSelectedField(this.state.selected);
        } else if (this.props.getInputData) {
          this.props.getInputData(this.state.selected);
        }
        
        res();
      }, 500);
    });
  };

  changeVisible = (s) => {
    this.setState({ visible: s });
  };

  buttonDown = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  }

  render() {
    return (
      <div className="dropdown-root">
        <div className={`${this.props.className}-hint`}>{this.state.hint}</div>
        <OutsideClickHandler
          onOutsideClick={() => {
            this.changeVisible(false);
          }}
        >
          <div className={`${this.props.className}-text-box`} onClick={this.buttonDown}>
            <div className={`${this.props.className}-display`}>{this.state.selected}</div>
          </div>
          {this.state.visible && (
            <DropdownItem
              className={this.props.className}
              items={this.props.items}
              getSelected={this.getSelectedItem}
              changeVisible={this.changeVisible}
            />
          )}
        </OutsideClickHandler>
      </div>
    );
  }
}

export default DropdownList;
