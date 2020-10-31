import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Selects from './Selects';
import './Dropdown.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
    this.wrapperRef = React.createRef();
    this.btnRef = React.createRef();
    this.onClickDropdown = this.onClickDropdown.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
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

  onChangeSelect(value, key, item) {
    this.props.onChangeValue(value, key, item);
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
    const { value, selectItems, variant } = this.props;
    const { showDropdown } = this.state;

    let currentValue = '';
    if (value) {
      currentValue = value;
    } else {
      currentValue = selectItems[0].value;
    }

    return (
      <div className="dropdown">
        <div className="dropdown__display" ref={this.btnRef} onClick={this.onClickDropdown}>
          <div className="dropdown__display__text">
            {currentValue}
          </div>
          <div className="dropdown__display__icon">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div ref={this.wrapperRef}>
          <Selects
            selectItems={selectItems}
            variant={variant}
            showDropdown={showDropdown}
            onChangeSelect={this.onChangeSelect}
          />
        </div>
      </div>
    );
  }
}

export default Dropdown;
