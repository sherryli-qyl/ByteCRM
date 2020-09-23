const dictionary = [
    { title:'FirstName',key: "First name"},
    { title:'LastName',key: "Last name"},
    { title:'Email',key: "Email"},
    { title:'PhoneNo',key: "Phone number"},
    { title:'ContactOwner',key: "Contact owner"},
    { title:'LifeCycle',key: "Lifecycle Stage"},
]

function contactInfo(key,title,value) {
    this.key = key;
    this.title = title;
    this.value = value; 
}

function FormatContact(contact){
    const contactInfoArray=[];
    for (let i in dictionary){
        const value = contact[dictionary[i].title];
        const item = new contactInfo( dictionary[i].key,dictionary[i].title,value);
        contactInfoArray.push(item); 
    }
    return contactInfoArray;
}

export default FormatContact;