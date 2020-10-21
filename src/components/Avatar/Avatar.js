import React from 'react';
import './Avatar.scss';



const Avatar = ({
    children,
    variant, //large,small
}) => {

    let className = `avatar avatar--${variant}`
    
    return (
        <div className={className}>
            {children}
        </div>
    )
}


export default Avatar;