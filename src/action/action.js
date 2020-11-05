const saveAction = (value, key) => ({
  type: 'SAVE',
  value,
  key,
  reload: true,
});

const addContactAction = (contact) => ({
  type: 'ADD',
  contact,
});

const addUser = (user) => ({
  type: 'ADD',
  user,
  reload: true,
});


module.exports = { saveAction, addContactAction, addUser };
