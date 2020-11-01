import React from 'react';
import StageItem from './component/StageItem';
import './StageBar.scss';

const stageItems = [{ key: 0, value: 'Appointment Scheduled', className: 'firstStage' },
  { key: 1, value: 'Qualified to Buy', className: 'secondStage' },
  { key: 2, value: 'Presentation Scheduled', className: 'thirdStage' },
  { key: 3, value: 'Decision Maker Bought-In', className: 'fourthStage' },
  { key: 4, value: 'Contract Sent', className: 'fifthStage' },
  { key: 5, value: 'Closed won', className: 'sixthStage' },
  { key: 6, value: 'Closed lost', className: 'closeStage' },
];

const StageBar = ({
  stage,
}) => {
  console.log(stage);
  let key = 0;
  for (const i in stageItems) {
    if (stageItems[i].value === stage) {
      key = stageItems[i].key;
    }
  }

  return (
    <div className="stageBar">
      <div className="stageBar__wrapper">
        {stageItems.map((item) => {
          let className = '';
          if (item.key <= key && key !== 6) {
            className = item.className;
          } else if (item.key === 6 && key === 6) {
            className = item.className;
          }
          return (
            <StageItem
              key={item.key}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StageBar;
