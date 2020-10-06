import React, { Component } from 'react';
import ArrowIcon_Down from "../../../../img/Modal/DownArrow.svg";
import ArrowIcon_Right from '../../../../img/Modal/RightArrow.svg';
import CloseIcon from "../../../../img/Modal/closeIcon.png"
import "./Header.scss";



function Header(props) {
    const {hide,name} = props;
    console.log("name pass " + name);
    return (
        <div className="Header">
            <div className="Header__Left">
                <div className="Header__Left__Icon">
                    {hide ?
                        <button className="FunctionButton"
                            onClick={(event) => {
                                props.handleHideButton();
                                console.log("check hide state1 "+ hide);
                            }}>
                            <img className="ArrowIcon" src={ArrowIcon_Right} alt="Close"
                            />
                        </button>
                        :
                        <button className="FunctionButton"
                            onClick={(event) => {
                                props.handleHideButton();
                                console.log("check hide state2 "+ hide);
                            }}>
                            <img className="ArrowIcon" src={ArrowIcon_Down} alt="Close"
                            />
                        </button>
                    }
                </div>
                <div className="Header__Left__Name">
                    <span>{name}</span>
                </div>
            </div>
            <div className="Header__Right">
                <div className="Header__Right__Icon">
                    <button className="FunctionButton"
                        onClick={(event) => {
                            props.handleCloseButton();
                        }}
                    >
                        <img className="CloseIcon" src={CloseIcon} alt="Close" />
                    </button>
                </div>
            </div>
        </div>

    )
}


export default Header;