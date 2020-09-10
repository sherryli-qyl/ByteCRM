import React from 'react';
import "./Text.scss";


const Text =({
    children,
    className,
    text ='text',
})=>(
    <span className={className +" "+text}>
        {children}
    </span>
);

export default Text