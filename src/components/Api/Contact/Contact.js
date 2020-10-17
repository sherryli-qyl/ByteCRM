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

/*
function postData(url, data) {
  let urlObj = new URL(url);
  return fetch(urlObj, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // parses response to JSON
}


function putData(url, data) {
  let urlObj = new URL(url);
  return fetch(urlObj, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // parses response to JSON
}
*/