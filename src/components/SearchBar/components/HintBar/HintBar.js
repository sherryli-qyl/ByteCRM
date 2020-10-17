import React from 'react';

import './HintBar.scss';




const HintBar = ({
    children,
}) => (
        <div className='hintBar'>
            <div className='hintBar__text'>
                {children}
            </div>
        </div>
    )

export default HintBar;