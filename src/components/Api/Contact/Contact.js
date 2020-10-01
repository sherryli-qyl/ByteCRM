async function GetContact(contactId) {
    const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
    const response = await fetch(serverUrl,{
        method:"GET"
    });
    console.log(serverUrl);
    const data = response.json();
    console.table(data)
    return data;
}

export { GetContact };

