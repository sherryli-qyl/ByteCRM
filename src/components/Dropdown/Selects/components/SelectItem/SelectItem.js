import React from 'react';
import './SelectItem.scss';




const SelectItem =({
    item,
})=>{
    return(
        <div className = "selectItem">
           {item}
        </div>

    )
}

export default SelectItem;