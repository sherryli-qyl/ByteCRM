async function GetEmails(contactId) {
    const serverUrl = `http://localhost:3000/api/emails/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "GET"
    });
    const data = response.json();
    return data;
}


async function UpdateEmail(emailId, body) {
    const serverUrl = `http://localhost:3000/api/emails/${emailId}`;
    console.log(body);
    const response = await fetch(serverUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = response.json();
    return data;
}

async function UpdateContacts(contactId,emailId){
    console.log(emailId + "//" + contactId);
    const serverUrl = `http://localhost:3000/api/emails/${emailId}/contacts/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = response.json();
    return data;
}

async function RemoveContacts(contactId,emailId){
    const serverUrl = `http://localhost:3000/api/emails/${emailId}/contacts/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = response.json();
    return data;
}


export {GetEmails, UpdateEmail,UpdateContacts,RemoveContacts};
