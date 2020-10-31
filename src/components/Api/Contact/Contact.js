import api from '../../../lib/api';

async function GetContact(contactId) {
  const serverUrl = `http://localhost:3000/api/contacts/${contactId}`;
  const response = await fetch(serverUrl, {
    method: 'GET',
  });
  const data = response.json();
  return data;
}

async function GetAllContacts() {
  const url = new URL('http://localhost:3000/api/contacts');
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();
  return data;
}

async function removeContact(contactID) {
  const url = new URL(`http://localhost:3000/api/contacts/${contactID}`);
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });
  return response.status;
}

async function createContact(body) {
  const url = new URL('http://localhost:3000/api/contacts/');
  console.log(body);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = response.json();
  return data;
}

async function GetContactByUserId(userId, keyword) {
  const response = await api.get(`/api/contacts/search/${userId}/${keyword}`);

  if (response.statusText === 'OK') {
    return response;
  }

  return false;
}

const AddCompanyRef = (id, code) => {
  const response = api.post(`/api/contacts/${id}/companies/${code}`);
  return response;
};

const RemoveCompanyRef = (id, code) => {
  const response = api.delete(`/api/contacts/${id}/companies/${code}`);
  return response;
};

export {
  GetContact, UpdateContact, GetContactByUserId, GetAllContacts, removeContact, createContact, AddCompanyRef, RemoveCompanyRef,
};
