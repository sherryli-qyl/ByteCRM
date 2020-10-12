import React from 'react';
import './Overlay.scss';



const Overlay =({
    children
})=>(
    <div className = 'overlay'>
        {children}
    </div>
)

export default Overlay;