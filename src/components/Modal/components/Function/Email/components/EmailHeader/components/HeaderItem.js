import React from 'react';
import "./HeaderItem.scss";



const HeaderItems = ({
    children,
    borderBottom,
    value
}) => {
    let className = "emailHeader__main__item";
    if (borderBottom) {
        className += " border-bottom";
    }
    return (
        <div className={className}>
            <div className={"title"}>
                <span className="title__name">{value}</span>
            </div>
            <div className="emailHeader__main__item__right ">
                {children}
            </div>

        </div>
    )
}



export default HeaderItems;