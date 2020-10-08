const getUser = () => fetch('http://localhost:3000/auth', {
  method: 'GET',
  headers: {
    'X-Auth-Token': localStorage.getItem('jwtToken-byteCRM'),
  },
});

export default getUser;