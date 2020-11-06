import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './AddModalHeader.scss';

const AddModalHeader = ({
  title,
  onClickCloseBtn,
}) => (
  <div className="addModalHeader">
    <div className="addModalHeader__inner">
      <div className="addModalHeader__inner__left">
        <div className="addModalHeader__inner__left__title">
          {title}
        </div>
      </div>
      <div className="addModalHeader__inner__right">
        <button
          className="addModalHeader__inner__right__closeBtn"
          onClick={(event) => {
            event.preventDefault();
            onClickCloseBtn();
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  </div>
);

export default AddModalHeader;
