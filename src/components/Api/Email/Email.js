import api from '../../../lib/api';
import {apiFetch} from '../../../lib/api';
async function GetEmails(contactId) {
  const response = api.get(`/api/emails/${contactId}`);
  return response;
}

const GetMultiContactsEmails = (contacts) => {
  const response = api.get(`/api/emails/contacts/${contacts}`);
  return response;
};

async function PostEmail(body) {
  const serverUrl = `${apiFetch}/api/emails`;
  const response = await fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return response.json();
  }

  return false;
}

async function UpdateEmail(emailId, body) {
  const response = api.put(`/api/emails/${emailId}`)
  return response;
}

async function DeleteEmailLog(emailId) {
  const response = api.delete(`/api/emails/${emailId}`);
  return response;
}

async function UpdateContacts(contactId, emailId) {
  const response = api.put(`/api/emails/${emailId}/contacts/${contactId}`)
  return response;
}

async function RemoveContacts(contactId, emailId) {
  const response = api.delete(`/api/emails/${emailId}/contacts/${contactId}`)
  return response;
}

export {
  GetEmails, GetMultiContactsEmails, PostEmail, UpdateEmail, DeleteEmailLog, UpdateContacts, RemoveContacts,
};
