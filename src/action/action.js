const saveAction = (value) => ({
  type: 'SAVE',
  value,
  reload: true,
});

const addContactAction = (contact) => ({
  type: 'ADD',
  contact,
});

module.exports = { saveAction, addContactAction };
