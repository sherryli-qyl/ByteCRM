import ListItem from './ListItem';

function FormatList(selectsList){
    let formatedList = []
    for(let i in selectsList){
        const listItem = new ListItem(selectsList[i],true);
        formatedList.push(listItem);   
    }
    return formatedList;
}

function SearchSelectsLocal(selectsList,textInput){
    let searchList = [];
    for(let i in selectsList){
        if (selectsList[i].fullName.toUpperCase().includes(textInput)||selectsList[i].email.toUpperCase().includes(textInput) ){
                const listItem = new ListItem(selectsList[i],true)
                searchList.push(listItem);
        }
    }
    return searchList;
}

function SearchSelectsRemote(searchList,textInput,selectsList){
    let newSerachList = searchList;
    for(let i in selectsList){
        if (selectsList[i].fullName.toUpperCase().includes(textInput) ||selectsList[i].email.toUpperCase().includes(textInput)){  
                if(!checkDuplicate(newSerachList,selectsList[i])){
                    const listItem = new ListItem(selectsList[i],false)
                    newSerachList.push(listItem);
                }
        }
    }
    return newSerachList;
}

function ItemSelected(selectList,id,checked){
    let newList = selectList;
    for (let i in newList){
        if(newList[i].contact.id === id){
            newList[i].checked = checked
        }
    }
    return newList
}

function CheckOneSelects(selectsList,searchList){
    let checkedCounter = 0;
    let contactId = "";
    for (let i in searchList){
        if(searchList[i].checked === true ){
            checkedCounter +=1;
            contactId = searchList[i].contact.id
        }
    }
    if(checkedCounter === 1 && selectsList.length > 1){
        return false
    }
    else if(checkedCounter === 1 && selectsList[0].contact.id === contactId){
        return contactId;
    }
    else{
        return false
    }
}

function checkDuplicate(selectsList,contact){
    let duplicate = false;
    for (let i in selectsList){
        if(selectsList[i].contact._id === contact._id){
            duplicate = true;
            return duplicate
        }
    }
    return duplicate;
}

export {FormatList,SearchSelectsLocal,SearchSelectsRemote,ItemSelected,CheckOneSelects};