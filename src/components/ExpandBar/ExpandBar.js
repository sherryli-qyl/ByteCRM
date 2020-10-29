import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import RotateArrow from '../RotateArrow';
import AddModal from '../AddModal';
import HintBox from '../HintBox';
import './ExpandBar.scss';

class ExpandBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: this.props.showDetail,
            showAddModal: false,
            showHint: false,
            color: 'white',
        };

        this.handleOnClickAngle = this.handleOnClickAngle.bind(this);
        this.hintBoxToggle = this.hintBoxToggle.bind(this);
        this.onClickAddBtn = this.onClickAddBtn.bind(this);
        this.onClickCloseBtn = this.onClickCloseBtn.bind(this);
    }

    onClickAddBtn() {
        this.setState((prevState) => ({
            ...prevState,
            showAddModal: true,
        }));
    }

    onClickCloseBtn() {
        this.setState((prevState) => ({
            ...prevState,
            showAddModal: false,
        }));
    }

    handleOnClickAngle() {
        this.setState((prevState) => ({
            showDetail: !prevState.showDetail,
        }));
    }

    hintBoxToggle(show) {
        this.setState({
            showHint: show,
        });
    }

    render() {
        const { showHint, showAddModal, showDetail } = this.state;
        const {
 showAdd, disabled, hintMessage, addModal,
} = this.props;

        let expandContentClassName = 'expandBar__container__content ';
        let addBtnClassName = 'expandBar__container__right__addBtn ';

        if (showDetail) {
            expandContentClassName += 'expandBar__container__content__active';
        }

        if (disabled) {
            addBtnClassName += 'expandBar__container__right__addBtn--disable';
        }

        return (
          <div className="expandBar">
            <div className="expandBar__container">
              <div className="expandBar__container__labelBtn" onClick={this.handleOnClickAngle}>
                <RotateArrow
                  rotate={showDetail}
                  className="expandBar__container__labelBtn__icon"
                />
                <div className="expandBar__container__labelBtn__text">
                  <span>
                    {' '}
                    {this.props.label}
                    {' '}
                  </span>
                </div>
                {showAdd
                            ? (
                              <div
                                className="expandBar__container__right"
                                onMouseEnter={() => this.hintBoxToggle(true)}
                                onMouseLeave={() => this.hintBoxToggle(false)}
                              >
                                <button
                                  className={addBtnClassName}
                                  disabled={disabled}
                                  onClick={(event) => {
                                        event.stopPropagation();
                                        this.onClickAddBtn();
                                    }}
                                >
                                  {disabled && showHint
                                        ? (
                                          <div className="expandBar__container__right__hint">
                                            <HintBox variant="right">
                                              {hintMessage}
                                            </HintBox>
                                          </div>
)
                                        : ''}
                                  + Add
                                </button>
                              </div>
)
                            : ''}
              </div>
              <div className={expandContentClassName}>
                {showDetail
                            ? this.props.content
                            : ''}
              </div>
            </div>
            {addModal
                  ? (
                    <AddModal
                      addModal={addModal}
                      onClickCloseBtn={this.onClickCloseBtn}
                      showAddModal={showAddModal}
                      onClickSaveBtn={() => {
                                this.props.onClickSaveBtn();
                               this.onClickCloseBtn();
                            }}
                    />
)
                    : ''}
          </div>
        );
    }
}

export default ExpandBar;
