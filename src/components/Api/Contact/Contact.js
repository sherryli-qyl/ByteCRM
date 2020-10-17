async function GetContact(contactId) {
  const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
  const response = await fetch(serverUrl, {
    method: "GET",
  });
  const data = response.json();
  return data;
}

async function GetAllContacts() {
  let url = new URL("http://localhost:3000/api/contacts");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}


async function removeContact(contactID) {
  let url = new URL(`http://localhost:3000/api/contacts/${contactID}`);
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  return response.status;
}

async function createContact(body) {
  const url = new URL("http://localhost:3000/api/contacts/");
  console.log(body);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = response.json();
  return data;
}

async function UpdateContact(contactId, body) {
  const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
  console.log(body);
  const response = await fetch(serverUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = response.json();
  return data;
}

async function GetContactByUserId(userId, keyword) {
  const serverUrl = `http://localhost:3000/api/contacts/search/${userId}/${keyword}`;
  const response = await fetch(serverUrl, {
    method: "GET",
  });
  // .then((res)=>{
  //     if(!res.ok){
  //         throw res;
  //     }
  //     return res.json();
  // })
  // .catch(error =>{
  //     if (error.status === 404){
  //         console.log("no match data");
  //     }
  //     throw error;
  // })
  if (response.status === 404) {
    return false;
  } else if (response.ok) {
    const data = response.json();
    return data;
  }
}

export { GetContact, UpdateContact, GetContactByUserId, GetAllContacts, removeContact, createContact };