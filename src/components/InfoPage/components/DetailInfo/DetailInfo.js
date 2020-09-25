import React from 'react';
import './DetailInfo.scss';
import FormatData from '../../services/FormatData';
import AboutSection from './components/About';
import ExpandBar from '../../Private/ExpandBar';


const DetailInfo = (props) => {
    const infoList = FormatData(props.dataPack.data,props.dictionary);
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