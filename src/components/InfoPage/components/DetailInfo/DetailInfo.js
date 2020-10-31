import React, { useContext } from 'react';
import './DetailInfo.scss';
import FormatData from '../../services/FormatData';
import AboutSection from './components/About';
import ExpandBar from '../../../ExpandBar';

const DetailInfo = (props) => {
  const { dataPack, dictionary } = props;
  const infoList = FormatData(dataPack.data, dictionary);
  const { expandPack } = props;

  expandPack[0].content = (
    <AboutSection
      infoList={infoList}
      key={props.dataPack.key}
      data={dataPack.data}
    />
  );

  return (
    <div className="DetailInfo">
      <div>
        {expandPack.map((item) => (
          <ExpandBar
            key={item.key}
            label={item.key}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailInfo;
