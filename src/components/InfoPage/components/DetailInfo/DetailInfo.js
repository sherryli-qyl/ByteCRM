import React from 'react';
import './DetailInfo.scss';
import FormatContact from './services/FormatContact';
import AboutContact from './components/About';
import ExpandBar from '../../Private/ExpandBar';


const DetailInfo = (props) => {
    const contactInfoList = FormatContact(props.contact);
    const expandPack = props.expandPack
    expandPack[0].content = <AboutContact contactInfoList={contactInfoList} />;

    return (
        <div className="DetailInfo">
            <div>
                {expandPack.map((item) => (
                    <ExpandBar key={item.key}
                        label={item.key}
                        content={item.content}>
                    </ExpandBar>
                ))
                }
            </div>
        </div>
    )
}


export default DetailInfo;