async function GetContact(contactId) {
    const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
    const response = await fetch(serverUrl,{
        method:"GET"
    });
    const data = response.json();
    return data;
}



export { GetContact };

