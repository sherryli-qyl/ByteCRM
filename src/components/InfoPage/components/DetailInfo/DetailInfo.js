import React from 'react';
import './DetailInfo.scss';
import FormatContact from './services/FormatContact';
import DetailInfoItem from './components/DetailInfoItem';



const DetailInfo = (props) => {
    const ContactInfoList = FormatContact(props.contact);
    return (
        <div className="DetailInfo">
            <div className='DetailInfo__top'>
                <button className='nakedBtn DetailInfo__top__btn'>
                    About this contact
                </button>
            </div>
            <div className='DetailInfo__items'>
                {ContactInfoList.map((item) => (
                    <DetailInfoItem
                        key={item.key}
                        itemKey={item.key}
                        title={item.title}
                        value={item.value}
                    />
                ))}
            </div>
        </div>
    )
}

export default DetailInfo;