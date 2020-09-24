const dictionary = [
    { key:'FirstName',title: "First Name"},
    { key:'LastName',title: "Last Name"},
    { key:'Email',title: "Email"},
    { key:'PhoneNo',title: "Phone Number"},
    { key:'ContactOwner',title: "Contact Owner"},
    { key:'LifeCycle',title: "Lifecycle Stage"},
]

function contactInfo(key,title,value) {
    this.key = key;
    this.title = title;
    this.value = value; 
}

function FormatContact(contact){
    const contactInfoArray=[];
    for (let i in dictionary){
        const value = contact[dictionary[i].key];
        const item = new contactInfo( dictionary[i].key,dictionary[i].title,value);
        contactInfoArray.push(item); 
    }
    return contactInfoArray;
}

export default FormatContact;