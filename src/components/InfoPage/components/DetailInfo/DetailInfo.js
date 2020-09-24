import React from 'react';
import './DetailInfo.scss';
import FormatContact from '../../services/FormatContact';
import AboutSection from './components/About';
import ExpandBar from '../../Private/ExpandBar';


const DetailInfo = (props) => {
    const infoList = FormatContact(props.dataPack);
    const expandPack = props.expandPack
    expandPack[0].content = <AboutSection infoList={infoList} />;

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