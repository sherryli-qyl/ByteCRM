function SearchContact(contactList,textInput){
    let searchList = [];
    for(let i in contactList){
        if (contactList[i].firstName.toUpperCase().includes(textInput)|| contactList[i].lastName.toUpperCase().includes(textInput)||contactList[i].email.toUpperCase().includes(textInput) ){
          searchList.push(contactList[i]);
        }
    }
    return searchList;
}

export {SearchContact};