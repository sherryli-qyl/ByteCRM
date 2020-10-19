import ListItem from './ListItem';

function FormatList(userList){
    let formatedList = []
    for(let i in userList){
        const listItem = new ListItem(userList[i],true);
        formatedList.push(listItem);   
    }
    return formatedList;
}

function SearchUserLocal(userList,textInput){
    let searchList = [];
    for(let i in userList){
        if (userList[i].fullName.toUpperCase().includes(textInput)||userList[i].email.toUpperCase().includes(textInput) ){
                const listItem = new ListItem(userList[i],true)
                searchList.push(listItem);
        }
    }
    return searchList;
}

function SearchUserRemote(searchList,textInput,usersList){
    let newSearchList = searchList;
    for(let i in usersList){
        if (usersList[i].fullName.toUpperCase().includes(textInput) ||usersList[i].email.toUpperCase().includes(textInput)){  
                if(!checkDuplicate(newSearchList,usersList[i])){
                    const listItem = new ListItem(usersList[i],false)
                    newSearchList.push(listItem);
                }
        }
    }
    return newSearchList;
}

function ItemSelected(selectList,id,checked){
    let newList = selectList;
    for (let i in newList){
        if(newList[i].user.id === id){
            newList[i].checked = checked
        }
    }
    return newList
}


function CheckOneUser(userList,searchList){
    let checkedCounter = 0;
    let userId = "";
    for (let i in searchList){
        if(searchList[i].checked === true ){
            checkedCounter +=1;
            userId = searchList[i].user.id
        }
    }
    if(checkedCounter === 1 && userList.length > 1){
        return false
    }
    else if(checkedCounter === 1 && userList[0].user.id === userId){
        return userId;
    }
    else{
        return false
    }
}

function checkDuplicate(userList,user){
    let duplicate = false;
    for (let i in userList){
        if(userList[i].user._id === user._id){
            duplicate = true;
            return duplicate
        }
    }
    return duplicate;
}

export {FormatList,SearchUserLocal,SearchUserRemote,ItemSelected,CheckOneUser};