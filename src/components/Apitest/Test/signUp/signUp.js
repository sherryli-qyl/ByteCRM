const signUp = ({
  email,
  password,
}) => fetch('http://localhost:3000/users', {
  method: 'POST',
  body: JSON.stringify({
    email,
    password,
  }),
  headers: {
    'content-type': 'application/json',
  },
});

export default signUp;
