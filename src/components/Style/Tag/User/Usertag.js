import React from 'react';
import './UserTag.scss';


const UserTag=(props)=>(
    <div className="userTag">
        <div className="userTag__icon">
            <img className='userTag__icon__img' src={props.userIcon} alt='user icon'/>
        </div>
        <div className = 'userTag__name'>
            {props.userName}
        </div>
    </div>
)

export default UserTag;