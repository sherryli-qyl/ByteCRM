import React from 'react';

import './flexContainerStyle.scss';

const getClassName = justifyContentValue => {
    if (!justifyContentValue) return "flex-container";

    return `flex-container flex-container--content-${justifyContentValue}`;
};

const FlexContainer = props => {
    return (
        <div className={getClassName(props.justifyContentValue)}>
            {props.children}
        </div>
    );
};

export default FlexContainer;
