import api from '../../../lib/api';

async function GetAllUsers() {
  const url = new URL('http://localhost:3000/api/users');
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();
  return data;
}

async function SearchUser(id, keyword) {
  const response = await api.get(`/api/users/search/${id}/${keyword}`);
  if (response.statusText === 'OK') {
    return response;
  }
  return false;
}

export { GetAllUsers, SearchUser };
