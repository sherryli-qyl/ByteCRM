import React from 'react';
import InfoHeader from './components/InfoHeader';
import InfoBody from './components/InfoBody';
import ActivityBar from './components/ActivityBar';
import './BasicInfo.scss';


const BasicInfo = (props) => (
    <div className='basicInfo'>
        <InfoHeader />
        <InfoBody contact = {props.contact}/>
        <ActivityBar  navItems={props.navItems}
                      modalKey={props.modalKey}
                      onNavItemClick={props.onNavItemClick}/>
    </div>
);

export default BasicInfo;
