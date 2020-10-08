import SearchResult from './SearchResult';
import {GetContactByUserId} from '../../components/Api/Contact';

const testList = [{ _id: "5f7d75bac4b63051271b23eb", firstName: "Harry", lastName: "Kayn", email: 'HarryKayn@gmail.com' },
{ _id: "5f7dce3175812d8b0f4d3add", firstName: "Ash", lastName: "Liu", email: 'Ashliu1990@gmail.com' }];


function SearchContactLocal(contactList,textInput){
    let searchList = [];
    for(let i in contactList){
        if (contactList[i].firstName.toUpperCase().includes(textInput)|| contactList[i].lastName.toUpperCase().includes(textInput)||contactList[i].email.toUpperCase().includes(textInput) ){
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
    // const findContacts = GetContactByUserId();
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