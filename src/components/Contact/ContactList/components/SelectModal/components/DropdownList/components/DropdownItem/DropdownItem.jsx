import React from "react";
import "./DropdownItem.scss";

function DropdownItem(props) {
  function displayElements() {
    return (
      <div className="show-options">
        {props.items &&
        props.items.map((value, key) => (
          <div
            className="data-row"
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
