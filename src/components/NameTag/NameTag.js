import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NameTag.scss';

const NameTag = ({
  onClick,
  children,
  disable,
}) => (
  <div className="nameTag">
    <div className="nameTag__left">
      <span className="nameTag__left__name">{children}</span>
    </div>
    {!disable
      ? (
        <div className="nameTag__right">
          <button
            className="nameTag__right__closeButton"
            disabled={disable}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onClick();
            }}
          >
            <FontAwesomeIcon className="closeIcon" icon={faTimes} />
          </button>
        </div>
      )
      : ''}

  </div>
);

export default NameTag;
