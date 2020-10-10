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
    console.log(body);
    await fetch(serverUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res =>{
        if(res.ok){
            console.log("log Email Success")
            return res.json();
        }
        else{
            throw res;
        }
    }).catch(error=>{
        console.log(error);
    });

    // const data = response.json();
    // return data;
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


export {GetEmails,PostEmail,UpdateEmail,UpdateContacts,RemoveContacts};
