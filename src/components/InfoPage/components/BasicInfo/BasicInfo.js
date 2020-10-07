import React from 'react';
import InfoHeader from './components/InfoHeader';
import InfoBody from './components/InfoBody';
import ActivityBar from './components/ActivityBar';
import './BasicInfo.scss';


const BasicInfo = (props) => (
    <div className='basicInfo'>
        <InfoHeader   dataPack = {props.dataPack}/>
        <InfoBody     dataPack = {props.dataPack}/>
        <ActivityBar  navItems={props.navItems}
                      modalKey={props.modalKey}
                      onNavItemClick={props.onNavItemClick}/>
    </div>
);

export default BasicInfo;
