const Contactdictionary = [
    { key:'FirstName',title: "First Name"},
    { key:'LastName',title: "Last Name"},
    { key:'Email',title: "Email"},
    { key:'PhoneNo',title: "Phone Number"},
    { key:'ContactOwner',title: "Contact Owner"},
    { key:'LifeCycle',title: "Lifecycle Stage"},
]
// const testCompany = {
//     Name: 'Nike', CompanyDomainName: 'Nike.Ltd', Industry: 'IT', PhoneNumber: '123123',
//     CompanyOwner: 'John Doe', Type: 'Partner', City: 'Sydney'
// }
const CompanyDictionary = [
    {key:'Name',title:'Name'},
    {key:'CompanyDomainName',title:'Company Domain Name'},
    {key:'Industry', title:'Industry'},
    {key:'PhoneNumber',title:'Phone Number'},
    {key:'CompanyOwner',title:'Company Owner'},
    {key:'Type',title:'Type'},
    {key:'City',title:'City'},
]

function dataInfo(key,title,value) {
    this.key = key;
    this.title = title;
    this.value = value; 
}

function FormatContact(dataPack){
    const dataInfoArray=[];
    let dictionary = [];
    if(dataPack.type === 'contact'){
      dictionary = Contactdictionary;
    }
    else{
        dictionary = CompanyDictionary;
    }
    for (let i in dictionary){
        const value = dataPack.data[dictionary[i].key];
        const item = new dataInfo( dictionary[i].key,dictionary[i].title,value);
        dataInfoArray.push(item); 
    }
    return dataInfoArray;
}

export default FormatContact;