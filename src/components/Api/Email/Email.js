async function GetEmails(contactId) {
    const serverUrl = `http://localhost:3000/api/emails/${contactId}`;
    const response = await fetch(serverUrl, {
        method: "GET"
    });
    const data = response.json();
    return data;
}

async function PostEmail(body){
    const serverUrl = `http://localhost:3000/api/emails`;
    const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (response.ok){
        return response.json();
    }
    else {
        return false
    }
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

async function DeleteEmailLog(emailId) {
    const serverUrl = `http://localhost:3000/api/emails/${emailId}`;
    const response = await fetch(serverUrl, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if(response.ok){
        return true;
    }
    else {
        return false;
    }
}



async function UpdateContacts(contactId,emailId){
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


export {GetEmails,PostEmail,UpdateEmail,DeleteEmailLog,UpdateContacts,RemoveContacts};
