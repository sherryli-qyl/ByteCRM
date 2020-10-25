import React from 'react';
import SelectItem from './components/SelectItem/SelectItem';
import {CheckOneUser} from '../../../../utils/SearchUser/SearchUser';
import './UserSelect.scss';



const UserSelect = (props) => {
    const { userList,searchList,label} = props;

    let currentList = userList;

    if (searchList && searchList.length > 0){
        currentList = searchList
    }

    return (
        <div className="userSelect">
            <div className="userSelect__title">
                <span className="userSelect__title__text">
                    {label}
                </span>
            </div>
            {
                currentList.map(item => { 
                    const oneUserId = CheckOneUser(userList,currentList);
                    let disabled = false;
                    if (oneUserId && oneUserId === item.user._id){
                        disabled = true
                    }
                    return (
                        <SelectItem
                            key={item.user._id}
                            userID={item.user._id}
                            user={item.user}
                            checked={item.checked}
                            disabled = {disabled}
                            userSelectHint = {props.userSelectHint}
                            handleRemoveUser={props.handleRemoveUser}
                            handleAddUser={props.handleAddUser}>
                        </SelectItem>
                    )
                })

            }
        </div>
    )
}

export default UserSelect;