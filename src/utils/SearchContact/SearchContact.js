import SearchResult from './SearchResult';

const testList = [{ _id: "00003", firstName: "Olivia", lastName: "May", email: '2243@gmail.com' },
{ _id: "00004", firstName: "Robert", lastName: "Lee", email: '2241143@gmail.com' }];


function SearchContactLocal(contactList,textInput){
    let searchList = [];
    for(let i in contactList){
        if (contactList[i].firstName.toUpperCase().includes(textInput)|| contactList[i].lastName.toUpperCase().includes(textInput)||contactList[i].email.toUpperCase().includes(textInput) ){
            const searchResult = new SearchResult(contactList[i],true)
            searchList.push(searchResult);
        }
    }
    return searchList;
}

function SearchContactRemote(searchList,textInput){
    let newSerachList = searchList;
    for(let i in testList){
        if (testList[i].firstName.toUpperCase().includes(textInput)|| testList[i].lastName.toUpperCase().includes(textInput)||testList[i].email.toUpperCase().includes(textInput) ){
            for (let d in newSerachList){
                if (newSerachList[d].contact._id === testList[i]._id){
                    return newSerachList;
                }  
            }
            const searchResult = new SearchResult(testList[i],false)
            newSerachList.push(searchResult);
        }
    }
    return newSerachList;
}

export {SearchContactLocal,SearchContactRemote};