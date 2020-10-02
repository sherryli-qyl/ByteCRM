import React from "react";
import "./DropdownItem.scss";

function DropdownItem(props) {
  let id = 0;
  function displayElements() {
    return (
      <div className={`${props.className}-show-options`}>
        {props.items &&
        props.items.map((value, key) => (
          <div
            className="data-row"
            key={id++}
            onClick={() => {
              props.changeVisible(false);
              props.getSelected(value);
            }}
          >
            {value}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {displayElements()}
    </>
  );
};

export default DropdownItem;
