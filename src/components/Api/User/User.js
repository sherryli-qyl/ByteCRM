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

export { GetAllUsers };
