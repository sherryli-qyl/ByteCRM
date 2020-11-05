import React from 'react';
import RotateArrow from '../../../RotateArrow';
import CloseIcon from '../../../../img/Modal/closeIcon.png';
import './Header.scss';

function Header(props) {
  const { hide, name } = props;
  let hideClassName = 'Header__left__icon ';
  if (hide){
    hideClassName += 'Header__left__icon--hide'
  }
  return (
    <div className="Header">
      <div className="Header__left">
          <button
            className="Header__left__btn"
            onClick={(event) => {
              props.handleHideButton();
            }}
          >
           <RotateArrow rotate={!hide}
                        className="Header__left__btn__icon"/>
          </button>
        <div className="Header__left__Name">
          <span>{name}</span>
        </div>
      </div>
      <div className="Header__right">
        <div className="Header__right__icon">
          <button
            className="FunctionButton"
            onClick={(event) => {
              props.handleCloseButton();
            }}
          >
            <img className="CloseIcon" src={CloseIcon} alt="Close" />
          </button>
        </div>
      </div>
    </div>

  );
}

export default Header;
