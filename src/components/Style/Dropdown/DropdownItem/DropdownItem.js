import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';




const DropdownItem = (props) => (
    <MenuItem
        key={item.key}
        value={item.value}>
        {item.key + `(${addDate(item.value)})`}
    </MenuItem>
)


export default DropdownItem;