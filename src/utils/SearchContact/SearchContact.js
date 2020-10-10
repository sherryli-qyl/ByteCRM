import SearchResult from './SearchResult';



function SearchContactLocal(contactList,textInput){
    let searchList = [];
    for(let i in contactList){
        if (contactList[i].fullName.toUpperCase().includes(textInput)||contactList[i].email.toUpperCase().includes(textInput) ){
            // if (!checkDuplicate(searchList,contactList[i])){
                const searchResult = new SearchResult(contactList[i],true)
                searchList.push(searchResult);
            // }
        }
    }
    return searchList;
}

function SearchContactRemote(searchList,textInput,contactsList){
    let newSerachList = searchList;
    for(let i in contactsList){
        if (contactsList[i].fullName.toUpperCase().includes(textInput) ||contactsList[i].email.toUpperCase().includes(textInput)){  
                if(!checkDuplicate(newSerachList,contactsList[i])){
                    const searchResult = new SearchResult(contactsList[i],false)
                    newSerachList.push(searchResult);
                }
        }
    }
    return newSerachList;
}

function checkDuplicate(contactList,contact){
    let duplicate = false;
    for (let i in contactList){
        if(contactList[i].contact._id === contact._id){
            duplicate = true;
            return duplicate
        }
    }
    return duplicate;
}

export {SearchContactLocal,SearchContactRemote};