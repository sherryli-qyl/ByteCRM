import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import HintBox from '../../../../../HintBox';
import './SelectItem.scss';

class SelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHint: false,
    };
    this.handleHintToggle = this.handleHintToggle.bind(this);
  }

  handleHintToggle(show) {
    this.setState({
      showHint: show,
    });
  }

  render() {
    const {
      contact,
      contactID,
      disabled,
      checked,
      handleRemoveSelects,
      handleAddSelects,
      selectHint,
    } = this.props;

    const { showHint } = this.state;

    let btnClassName = 'selectSearchItem__left__checkbox__btn ';

    if (disabled) {
      btnClassName += 'selectSearchItem__left__checkbox__btn--disabled';
    }

    return (
      <div
        className="selectSearchItem"
        onMouseEnter={() => this.handleHintToggle(true)}
        onMouseLeave={() => this.handleHintToggle(false)}
      >
        <div className="selectSearchItem__left">
          {checked
            ? (
              <div className="selectSearchItem__left__checkbox">
                <button
                  className={btnClassName}
                  disabled={disabled}
                  onClick={(event) => {
                    event.preventDefault();
                    handleRemoveSelects(contactID);
                  }}
                >
                  <FontAwesomeIcon icon={faCheckSquare} />
                </button>
              </div>
            )

            : (
              <div
                className="selectSearchItem__left__square"
                onClick={(event) => {
                  event.preventDefault();
                  handleAddSelects(contact);
                }}
              />
            )}
        </div>
        <div className="selectSearchItem__right">
          {`${contact.fullName} (${contact.email})`}
        </div>
        {disabled && showHint
          ? (
            <div className="selectSearchItem__hint">
              <HintBox variant="topRight">{selectHint}</HintBox>
            </div>
          )

          : ''}
      </div>
    );
  }
}

export default SelectItem;
