import api from '../../../lib/api';
import {apiFetch} from '../../../lib/api';


const GetCompanyByCode = (id) => {
  const response = api.get(`/api/companies/${id}`);
  return response;
};

async function GetCompany(code) {
  const serverUrl = `${apiFetch}/api/companies/${code}`;
  const response = await fetch(serverUrl, {
    method: 'GET',
  });
  const data = response.json();
  return data;
}

async function GetAllCompanies() {
  const url = new URL(`${apiFetch}/api/companies`);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();
  return data;
}

async function UpdateCompany(code, body) {
  console.log("UpdateCompany -> code, body", code, body)
  const serverUrl = `${apiFetch}/api/companies/${code}`;
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
  

async function AddCompany(body) {
  const serverUrl = `${apiFetch}/api/companies`;
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

async function GetCompanyByUserId(id, keyword) {
  const response = await api.get(`http://localhost:3000/api/companies/search/${id}/${keyword}`);
  return response;
}

async function DeleteCompany(code) {
  const serverUrl = `${apiFetch}/api/companies/${code}`;
  const response = await fetch(serverUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return true;
  }
  return false;
}

async function MultiRefChange(id, body) {
  const response = api.put(`/api/companies/${id}/ref`, body);
  return response;
}

export {
  GetCompanyByCode, GetAllCompanies, GetCompany, AddCompany, UpdateCompany, GetCompanyByUserId, DeleteCompany, MultiRefChange,
};
