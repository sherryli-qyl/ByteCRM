const saveAction = (value) => ({
  type: 'SAVE',
  value,
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
