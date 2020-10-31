import React from 'react';
import SelectItem from './components/SelectItem';
import './Selects.scss';

const Selects = ({
  selectItems,
  showDropdown,
  onChangeSelect,
  variant,
}) => {
  let selectClassName = 'select ';
  let cornerClassName = 'select__wrapper__corner ';

  if (showDropdown) {
    selectClassName += 'select--active ';
  }

  if (variant === 'above') {
    selectClassName += `select--${variant}`;
    cornerClassName += 'select__wrapper__corner--bottom';
  } else {
    selectClassName += 'select select--below';
    cornerClassName += 'select__wrapper__corner--top';
  }

  return (
    <div className={selectClassName}>
      <div className="select__wrapper">
        <div className={cornerClassName} />
        <div className="select__wrapper__inner">
          {selectItems.map((item) => (
            <SelectItem
              key={item.key}
              onClick={() => onChangeSelect(item.value, item.key, item)}
              item={item.display ? item.display : item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selects;
