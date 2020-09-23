import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "./DropdownItem.scss";

const DropdownItem = (props) => {
  function displayElements(elements) {
    console.log(props);
    console.log(elements);
    return (
      <div className="show-options">
        {elements.map((value, key) => (
          <div
            className="data-row"
            onClick={() => {
              props.changeVisible(false);
              props.changeSelected(value);
            }}
          >
            {value}
          </div>
        ))}
      </div>
    );
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        props.changeVisible(false);
      }}
    >
      {displayElements(props.items)}
    </OutsideClickHandler>
  );
};

export default DropdownItem;
