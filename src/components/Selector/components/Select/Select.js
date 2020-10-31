import React from 'react';
import SelectItem from './components/SelectItem/SelectItem';
import { CheckOneSelects } from '../../../../lib/Search';
import './Select.scss';

const Select = (props) => {
  const {
    selectList, searchList, label, checkOneContact,
  } = props;

  let currentList = [];

  selectList ? currentList = selectList : currentList = [];

  if (searchList && searchList.length > 0) {
    currentList = searchList;
  }

  return (
    <div className="searchResultSelect">
      <div className="searchResultSelect__title">
        <span className="searchResultSelect__title__text">
          {label}
        </span>
      </div>
      {
        currentList.map((item) => {
          const oneContactId = CheckOneSelects(selectList, currentList);
          let disabled = false;
          if (oneContactId && oneContactId === item.selects._id && checkOneContact) {
            disabled = true;
          }
          return (
            <SelectItem
              key={item.selects._id}
              contactID={item.selects._id}
              contact={item.selects}
              checked={item.checked}
              disabled={disabled}
              selectHint={props.selectHint}
              handleRemoveSelects={props.handleRemoveSelects}
              handleAddSelects={props.handleAddSelects}
            />
          );
        })
      }
    </div>
  );
};

export default Select;
