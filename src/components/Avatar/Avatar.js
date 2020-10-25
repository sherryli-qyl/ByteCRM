import React from 'react';
import './Avatar.scss';



const Avatar = ({
    children,
}) => {
    
    return (
        <div className= "avatar">
            {children}
        </div>
    )
}


export default Avatar;