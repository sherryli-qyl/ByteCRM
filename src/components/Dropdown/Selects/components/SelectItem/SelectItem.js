import React from 'react';
import './SelectItem.scss';




const SelectItem =({
    item,
    onClick
})=>{
    return(
        <div className = "selectItem">
            <button className="selectItem__btn"
                    onClick={(event)=>{
                        event.preventDefault();
                        onClick();
                        }}>
              {item}
            </button>
        </div>

    )
}

export default SelectItem;