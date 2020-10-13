import React from 'react';
import './SelectItem.scss';




const SelectItem =({
    item,
})=>{
    return(
        <div className = "selectItem">
            <button className="selectItem__btn">
              {item}
            </button>
        </div>

    )
}

export default SelectItem;