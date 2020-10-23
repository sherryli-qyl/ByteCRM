import React from 'react';

import './SwitchButton.scss'



const SwitchButton = ({
    label,
    active,
    handleSwitchBtn
}) => {

    let className = 'switchButton '

    if (active) {
        className += 'switchButton--active'
    }


    return (
        <button className={className}
                onClick = {(event)=>{
                    event.preventDefault();
                    handleSwitchBtn();
                }}>
            {label}
        </button>
    )
}

export default SwitchButton;